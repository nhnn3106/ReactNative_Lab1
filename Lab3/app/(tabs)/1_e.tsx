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
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { useState } from "react";
export default function Index() {
  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>([
    { id: "1", label: "Male", value: "male", selected: true },
    { id: "2", label: "Female", selected: false },
  ]);
  const onPressRadioButton = (selectedID: string) => {
    const updatedRadioButtons = radioButtons.map((button) => ({
      ...button,
      selected: !button.selected,
    }));
    setRadioButtons(updatedRadioButtons);
  };
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
        {"REGISTER"}
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
        placeholder="Name"
      />
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          paddingLeft: 20,
          marginBottom: 20,
        }}
        placeholderTextColor={"black"}
        placeholder="Phone"
      />
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
          marginBottom: 20,
          paddingRight: 10,
        }}>
        <TextInput style={{ flex: 1, paddingLeft: 20 }} value="Password" />
        <Image source={require("../../assets/images/eye 1.png")} />
      </View>
      <TextInput
        style={{
          width: "100%",
          height: 40,
          borderWidth: 1,
          paddingLeft: 20,
          marginBottom: 20,
        }}
        placeholderTextColor={"black"}
        placeholder="Birthday"
      />

      <RadioGroup
        containerStyle={{
          flexDirection: "row",
          width: "100%",
          marginVertical: 5,
        }}
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
      />

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
    </View>
  );
}
