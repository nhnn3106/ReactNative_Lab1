import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handleOnPress = () => {
    router.push("/(tabs)/screen02");
  };
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-[#8353E2] font-bold text-2xl text-center">
        MANAGE YOUR {"\n"}TASK
      </Text>
      <View className="flex-row w-9/12 m-10 items-center border border-gray-300 px-5 py-1 rounded-xl">
        <Feather name="mail" size={24} color="#000000" />
        <TextInput className="" placeholder="Enter your name" />
      </View>
      <TouchableOpacity
        onPress={handleOnPress}
        className="flex-row bg-[#00BDD6] gap-5 m-10 items-center px-5 py-3 rounded-lg">
        <Text className="text-white">GET STARTED</Text>
        <AntDesign name="arrow-right" size={12} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
