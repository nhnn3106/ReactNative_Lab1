import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen03 = () => {
  return (
    <SafeAreaView className="flex-1 mx-5">
      <Text className="text-2xl font-bold text-center mb-10">ADD YOUR JOB</Text>

      <View className=" border w-full mt-5 flex-row items-center gap-3 px-2 mb-10">
        <Image
          resizeMode="contain"
          source={require("../../assets/images/input_icon.png")}
        />
        <TextInput className="flex-1" placeholder="Input your job" />
      </View>
      <View>
        <TouchableOpacity className="flex-row gap-8">
          <Text>Finish</Text>
          <AntDesign name="arrow-left" color="black" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Screen03;
