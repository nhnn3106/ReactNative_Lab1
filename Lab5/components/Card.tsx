import { View, Text, Image } from "react-native";
import React from "react";
import { dataProp } from "../app/data";

const Card = (item: dataProp) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal", // Options: 'decimal', 'currency', 'percent'
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return (
    <View style={{ flex: 1, margin: 5 }}>
      <Image style={{ width: "100%" }} source={item.image} />
      <Text style={{}}>{item.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
        {Array.from({ length: item.rating }).map((_, idx) => (
          <Image key={idx} source={require("../assets/images/Star 4.png")} />
        ))}
        <Text>(15)</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "bold" }}>
          {formatter.format(item.price)} đ
        </Text>
        <Text>-{item.discount}%</Text>
      </View>
    </View>
  );
};

export default Card;
