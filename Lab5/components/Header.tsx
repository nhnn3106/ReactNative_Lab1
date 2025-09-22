import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#1BA9FF",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}>
      <View>
        <Image
          source={require("../assets/images/ant-design_arrow-left-outlined.png")}
        />
      </View>
      <View style={{ width: "50%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            paddingHorizontal: 5,
            gap: 8,
          }}>
          <Image source={require("../assets/images/whh_magnifier.png")} />
          <TextInput placeholder="Dây cáp usb" />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ position: "relative" }}>
          <Image source={require("../assets/images/bi_cart-check.png")} />
          <View
            style={{
              position: "absolute",
              height: 10,
              width: 10,
              borderRadius: 50,
              backgroundColor: "red",
              right: 0,
            }}
          />
        </View>
        <View>
          <Image source={require("../assets/images/Group 2.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
