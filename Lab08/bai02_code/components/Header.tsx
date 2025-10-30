import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Header01 = () => {
  return (
    <SafeAreaView className="h-100 justify-between px-10 flex-row items-center gap-8">
      <AntDesign
        onPress={() => router.back()}
        name="arrow-left"
        color="black"
        size={24}
      />
      <View>
        <View className="flex-row items-center gap-5">
          <View className="bg-[#D9CBF6] w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              source={require("../assets/images/avatar.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="text-2xl font-bold">Hi Twinkle</Text>
            <Text className="text-gray-500">Have agrate day a head</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export const Header02 = () => {
  return (
    <SafeAreaView className="h-100 justify-between px-10 flex-row items-center gap-8">
      <View>
        <View className="flex-row items-center gap-5">
          <View className="bg-[#D9CBF6] w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              source={require("../assets/images/avatar.png")}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="text-2xl font-bold">Hi Twinkle</Text>
            <Text className="text-gray-500">Have agrate day a head</Text>
          </View>
        </View>
      </View>
      <AntDesign
        onPress={() => router.back()}
        name="arrow-left"
        color="black"
        size={24}
      />
    </SafeAreaView>
  );
};
