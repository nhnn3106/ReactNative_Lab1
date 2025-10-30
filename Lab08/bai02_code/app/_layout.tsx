import { Header01, Header02 } from "@/components/Header";
import TodoProvider from "@/contexts/TodoProvider";
import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)/index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)/screen02"
          options={{ header: () => <Header01 /> }}
        />
        <Stack.Screen
          name="(tabs)/screen03"
          options={{ header: () => <Header02 /> }}
        />
      </Stack>
    </TodoProvider>
  );
}
