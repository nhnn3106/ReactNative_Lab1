import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator, 
  Alert
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import TodoItem from '@/components/TodoItem'; // Component hiển thị từng mục
import { getAllTodos, addTodo, Todo, deleteTodo } from '../db/database'; // Import các hàm DB

const Screen02 = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  // 1. Hàm Bất đồng bộ để lấy dữ liệu
  const fetchTodos = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getAllTodos();
      setTodos(data);
    } catch (error) {
      console.error("Lỗi khi lấy Todos:", error);
      Alert.alert("Lỗi", "Không thể tải danh sách công việc.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 2. Hàm xử lý thêm mới
  const handleAddTodo = async () => {
    if (inputText.trim() === '') return;

    try {
      // Gọi hàm thêm vào database
      await addTodo(inputText.trim()); 
      setInputText('');
      // Cập nhật danh sách sau khi thêm thành công
      await fetchTodos(); 
    } catch (error) {
      console.error("Lỗi khi thêm Todo:", error);
      Alert.alert("Lỗi", "Không thể thêm công việc mới.");
    }
  };

  // 3. Hàm xử lý xóa (Truyền xuống component con)
  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      await fetchTodos(); // Tải lại danh sách sau khi xóa
    } catch (error) {
      console.error("Lỗi khi xóa Todo:", error);
      Alert.alert("Lỗi", "Không thể xóa công việc.");
    }
  };


  // 4. Gọi dữ liệu khi component được mount
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);


  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <Header /> 

      {/* Khu vực nhập liệu */}
      <View style={styles.inputArea}>
        <TextInput 
          style={styles.input} 
          placeholder="Thêm công việc mới..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleAddTodo} 
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Danh sách công việc */}
      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
        ListEmptyComponent={<Text style={styles.emptyText}>Chưa có công việc nào.</Text>}
        renderItem={({item}) => (
          <TodoItem 
            todo={item} // Truyền item dưới dạng prop 'todo'
            onDelete={handleDeleteTodo} // Truyền hàm xóa
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        paddingTop: 50, // Dành chỗ cho StatusBar
        paddingHorizontal: 20,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 15,
    },
    input: {
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 8,
        flex: 1,
        padding: 12,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    addButton: {
      backgroundColor: '#007AFF',
      padding: 12,
      borderRadius: 8,
    },
    addButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    flatList: {
      flex: 1,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 50,
      color: '#888',
    }
});

export default Screen02;