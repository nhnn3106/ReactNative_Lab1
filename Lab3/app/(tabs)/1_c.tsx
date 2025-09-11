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
        style={{
          flex: 1,
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 100,
        }}>
        <Text
          style={{
            fontSize: 100,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 100,
          }}>
          {"CODE"}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 100,
          }}>
          {"VERIFICATION"}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 18,
            marginBottom: 30,
          }}>
          Enter ontime password sent on ++849092605798
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 50,
            borderWidth: 1,
            marginBottom: 50,
          }}>
          {Array.from({ length: 6 }).map((el, idx) => (
            <View
              key={idx}
              style={{ width: "16.67%", height: "100%", borderWidth: 1 }}
            />
          ))}
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
            VERIFY CODE
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
