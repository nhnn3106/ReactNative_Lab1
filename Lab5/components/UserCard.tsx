import { View, Text } from "react-native";
import React from "react";
import { UserProp } from "@/app/detail/UserList";

const UserCard = (user: UserProp) => {
  return (
    <View style={{ borderWidth: 1, paddingHorizontal: 10, marginVertical: 5 }}>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default UserCard;
