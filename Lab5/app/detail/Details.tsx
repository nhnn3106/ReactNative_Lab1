import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/Card";
import { data, dataProp } from "../data";

const Details = () => {
  const [items, setItems] = useState<dataProp[]>(data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        numColumns={2}
        key={`flatlist-${2}`}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card {...item} />}
      />
    </SafeAreaView>
  );
};

export default Details;
