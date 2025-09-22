import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import UserCard from "@/components/UserCard";
import { SafeAreaView } from "react-native-safe-area-context";

export interface UserProp {
  id: string;
  name: string;
  email: string;
}
const UserList = () => {
  const [users, setUsers] = useState<UserProp[] | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://68307adef504aa3c70f82418.mockapi.io/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading)
    return (
      <View>
        <ActivityIndicator size={30} color={"red"} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={{ fontWeight: "bold", textAlign: "center" }}>
          UserList
        </Text>
        <FlatList
          horizontal={true}
          data={users}
          renderItem={({ item }) => <UserCard {...item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserList;
