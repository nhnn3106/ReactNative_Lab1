import TodoItem from "@/components/TodoItem";
import { TodoContext } from "@/contexts/TodoProvider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen02 = () => {
  const todoContext = React.useContext(TodoContext);
  if (!todoContext) {
    return <Text>TodoContext not available</Text>;
  }
  const { todos } = todoContext;

  return (
    <SafeAreaView className="flex-1 mx-5">
      <View className="border px-3 flex-row items-center mb-10">
        <AntDesign name="search" size={24} />
        <TextInput className="flex-1 text-black" placeholder="Search" />
      </View>
      <View className="h-[500px] overflow-hidden">
        <FlatList
          className="flex-1"
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TodoItem {...item} />}
        />
      </View>
      <View className="justify-center items-center">
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/screen03")}
          className="rounded-full bg-[#00BDD6] w-[75px] h-[75px] justify-center items-center">
          <AntDesign className="" name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen02;
