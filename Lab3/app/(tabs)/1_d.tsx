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
    <View
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
          textAlign: "center",
          marginBottom: 50,
        }}>
        {"LOGIN"}
      </Text>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          paddingLeft: 20,
          marginBottom: 20,
        }}
        placeholderTextColor={"black"}
        placeholder="Email"
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          marginBottom: 50,
          paddingRight: 10,
        }}>
        <TextInput style={{ flex: 1, paddingLeft: 20 }} value="Password" />
        <Image source={require("../../assets/images/eye 1.png")} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#E53935",
          paddingVertical: 10,
          paddingHorizontal: 30,
          marginBottom: 20,
          width: "100%",
        }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          VERIFY CODE
        </Text>
      </TouchableOpacity>
      <Text style={{ marginBottom: 20 }}>
        When you agree to term and conditions
      </Text>
      <Text style={{ marginBottom: 20, color: "#5D25FA" }}>
        For got your password?
      </Text>
      <Text style={{ marginBottom: 50 }}>Or login with</Text>
      <View style={{ flexDirection: "row", height: 50, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#25479B",
            alignItems: "center",

            flex: 1,
            borderWidth: 1,
            borderColor: "#25479B",
            justifyContent: "center",
            height: "100%",
          }}>
          <Image
            source={require("../../assets/images/icofacebook-1924510 1.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#0F8EE0",
            alignItems: "center",
            flex: 1,
            borderWidth: 1,
            borderColor: "#0F8EE0",
            justifyContent: "center",
            height: "100%",
          }}>
          <Image source={require("../../assets/images/icozalo.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 1,
            borderWidth: 1,
            borderColor: "#0F8EE0",
            justifyContent: "center",
            height: "100%",
          }}>
          <Image source={require("../../assets/images/icogoogle.png")} />
        </View>
      </View>
    </View>
  );
}
