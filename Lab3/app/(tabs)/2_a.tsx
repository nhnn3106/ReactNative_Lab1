import {
  Button,
  Image,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  return (
    <LinearGradient
      colors={["#FBCB00", "#BF9A00"]}
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 100,
        backgroundColor: "#31AA5230",
      }}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          textAlign: "left",
          width: "100%",
          marginBottom: 50,
        }}>
        {"LOGIN"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          marginBottom: 50,
          alignItems: "center",
          backgroundColor: "#C4C4C44D",
          paddingHorizontal: 10,
        }}>
        <Image source={require("../../assets/images/avatar_user 1.png")} />
        <TextInput
          style={{ flex: 1, paddingLeft: 20, color: "black" }}
          value="Name"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          marginBottom: 50,
          alignItems: "center",
          backgroundColor: "#C4C4C44D",
          paddingHorizontal: 10,
        }}>
        <Image source={require("../../assets/images/lock-152879 1.png")} />
        <TextInput
          style={{ flex: 1, paddingLeft: 20, color: "black" }}
          value="Name"
        />
        <Image source={require("../../assets/images/eye 1.png")} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#060000",
          paddingVertical: 10,
          paddingHorizontal: 30,
          marginBottom: 20,
          width: "100%",
        }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>CREATE ACCOUNT</Text>
    </LinearGradient>
  );
}
