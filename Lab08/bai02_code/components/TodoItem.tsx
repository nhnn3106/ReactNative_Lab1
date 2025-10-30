import { TodoContext } from "@/contexts/TodoProvider";
import { todoProp } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const TodoItem = (item: todoProp) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(item.title);
  const todoContext = React.useContext(TodoContext);
  if (!todoContext) {
    throw new Error("TodoContext is not available");
  }
  const { updateTodo, deleteById } = todoContext;

  const handleUpdate = () => {
    updateTodo({ ...item, title: editingText });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingText(item.title);
  };

  const handleEditPress = () => {
    setIsEditing(true);
    setEditingText(item.title);
  };

  const handleDelete = () => {
    deleteById(item.id);
  };

  const handleToggleStatus = () => {
    updateTodo({ ...item, status: !item.status });
  };

  if (isEditing) {
    return (
      <View className="flex-row gap-2 bg-gray-300 p-3 rounded-full my-2">
        <TextInput
          className="flex-1 border-b border-black px-2"
          placeholder="Enter your changing text..."
          value={editingText}
          onChangeText={setEditingText}
          autoFocus={true}
        />
        <TouchableOpacity
          onPress={handleUpdate}
          className="bg-blue-400 justify-center p-2 rounded-lg">
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCancel}
          className="bg-red-400 justify-center p-2 rounded-lg">
          <Text className="text-white">Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View className="flex-row gap-3 items-center bg-gray-300 p-3 rounded-full my-2">
      <TouchableOpacity onPress={handleToggleStatus}>
        <AntDesign
          name={item.status ? "check-square" : "close-square"}
          size={24}
          color={item.status ? "green" : "red"}
        />
      </TouchableOpacity>
      <Text className="flex-1 font-bold">{item.title}</Text>
      <TouchableOpacity onPress={handleEditPress}>
        <MaterialIcons name="edit" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete}>
        <EvilIcons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
