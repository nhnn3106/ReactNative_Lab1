import Header from "@/components/Header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="detail/Details"
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen name="detail/UserList" />
      <Stack.Screen
        name="detail/Gallery"
        options={{ headerTitle: "Gallery" }}
      />
    </Stack>
  );
}
