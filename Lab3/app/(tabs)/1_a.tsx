import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient
        colors={[
          "white",
          "white",
          "white",
          "white",
          "white",
          "white",
          "white",
          "#37D6F8",
        ]}
        style={{ flex: 1, alignItems: "center", paddingHorizontal: 10 }}>
        <Image
          source={require("../../assets/images/ellipse.png")}
          style={{ marginVertical: 100 }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 100,
          }}>
          {"GROW \n YOUR BUSINESS"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
            marginBottom: 100,
          }}>
          We will help you to grow your business using online server
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 30,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#E3C000",
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}>
            <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#E3C000",
              paddingVertical: 10,
              paddingHorizontal: 30,
              borderRadius: 10,
            }}>
            <Text style={{ fontWeight: "bold" }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: "bold" }}>HOW WE WORK?</Text>
      </LinearGradient>
    </View>
  );
}
