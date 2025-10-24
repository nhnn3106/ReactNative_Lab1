import { SQLiteDatabase, SQLiteProvider } from 'expo-sqlite';
import { setupDatabase } from "../db/database";
import { Stack } from 'expo-router';

async function migrateDbIfNeeded(db: SQLiteDatabase) {
    // Hàm này sẽ đảm bảo database được setup khi ứng dụng khởi động.
    await setupDatabase(db);
}

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="todo_db.db" onInit={migrateDbIfNeeded}>
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="Screen02"/>
    </Stack>
  </SQLiteProvider>
  );
}
