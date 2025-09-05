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
        style={{ flex: 1, alignItems: "center", marginHorizontal: 10 }}>
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
        <View style={{ flexDirection: "row", borderWidth: 1 }}>
          <Image source={require("../../assets/images/mail-2935365 1.png")} />
          <TextInput
            style={{ flex: 1, backgroundColor: "#C4C4C4" }}
            value="email"
          />
        </View>
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
