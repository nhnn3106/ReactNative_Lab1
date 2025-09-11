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
      <Image
        source={require("../../assets/images/Group (3).png")}
        style={{
          marginBottom: 50,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#C4C4C4",
          marginBottom: 50,
          alignItems: "center",
          paddingHorizontal: 10,
        }}>
        <Image source={require("../../assets/images/Group 3.png")} />
        <TextInput
          style={{ flex: 1, paddingLeft: 20, color: "#C4C4C4" }}
          value="Name"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderColor: "#C4C4C4",
          marginBottom: 50,
          alignItems: "center",
          paddingHorizontal: 10,
        }}>
        <Image source={require("../../assets/images/Group 5.png")} />
        <TextInput
          style={{ flex: 1, paddingLeft: 20, color: "#C4C4C4" }}
          value="Name"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#386FFC",
          paddingVertical: 10,
          borderRadius: 10,
          paddingHorizontal: 30,
          marginBottom: 20,
          width: "100%",
        }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}>
        <Text style={{ fontSize: 18 }}>Register</Text>
        <Text style={{ fontSize: 18 }}>Forgot Password</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            height: 1,
            marginRight: 5,
            borderColor: "#0E18F5",
          }}
        />
        <Text style={{ fontSize: 20 }}>Other Login Methods</Text>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            height: 1,
            marginLeft: 5,
            borderColor: "#0E18F5",
          }}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}>
        <Image source={require("../../assets/images/Group 8.png")} />
        <Image source={require("../../assets/images/Group 9.png")} />
        <View
          style={{
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#3A579C",
          }}>
          <Image
            source={require("../../assets/images/brandico_facebook.png")}
          />
        </View>
      </View>
    </View>
  );
}
