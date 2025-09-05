import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient
        colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
        style={{ flex: 1, alignItems: "center", paddingHorizontal: 10 }}>
        <Image
          source={require("../../assets/images/Vector.png")}
          style={{ marginVertical: 100 }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 100,
          }}>
          {"PASSWORD"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
            marginBottom: 30,
          }}>
          Provide your account’s email for which you want to reset your password
        </Text>
        <View
          style={{ flexDirection: "row", borderWidth: 1, marginBottom: 50 }}>
          <Image source={require("../../assets/images/mail-2935365 1.png")} />
          <TextInput
            style={{ flex: 1, backgroundColor: "#C4C4C4" }}
            value="email"
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#E3C000",
            paddingVertical: 10,
            paddingHorizontal: 30,

            width: "100%",
          }}>
          <Text
            style={{ fontWeight: "bold", textAlign: "center", fontSize: 20 }}>
            NEXT
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
