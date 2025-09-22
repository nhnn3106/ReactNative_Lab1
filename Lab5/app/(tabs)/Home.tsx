import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => router.push("/detail/Gallery")}>
        <Text>Chuyển đến trang Details</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
