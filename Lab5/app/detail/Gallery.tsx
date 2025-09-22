import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollViewBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ImageProp {
  id: string;
  title: string;
  image: string;
  description: string;
  isNotice: number;
}
const Gallery = () => {
  const [images, setImages] = useState<ImageProp[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listType, setListType] = useState<string[]>(["list", "grid"]);
  useEffect(() => {
    const fecthImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://68307adef504aa3c70f82418.mockapi.io/gallery"
        );
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error occured");
      } finally {
        setLoading(false);
      }
    };
    fecthImages();
  }, []);

  if (loading)
    return (
      <View>
        <ActivityIndicator size={30} color={"blue"} />
      </View>
    );
  if (error)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginVertical: 5 }}>
          <Text
            style={{
              fontWeight: "bold",
              marginHorizontal: 5,
              fontSize: 26,
              marginVertical: 2,
            }}>
            Yêu thích
          </Text>
          <FlatList
            //   numColumns={2}
            horizontal={true}
            data={images?.slice(0, 10)}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 2,
                  overflow: "hidden",
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <View style={{ margin: 4 }}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "space-between",
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                fontWeight: "bold",
                marginHorizontal: 5,
                fontSize: 26,
              }}>
              {listType[0] === "list" ? "List View" : "Grid View"}
            </Text>
            <TouchableOpacity
              onPress={() =>
                listType[0] === "list"
                  ? setListType(["grid", listType[1]])
                  : setListType(["list", listType[1]])
              }
              style={{ backgroundColor: "blue", padding: 5, borderRadius: 5 }}>
              <Text style={{ color: "white" }}>Đổi kiểu list</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            numColumns={listType[0] === "list" ? 1 : 2}
            data={images?.slice(11, 20)}
            key={`${listType[0] === "list" ? 1 : 2}`}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 2,
                  overflow: "hidden",
                  flex: 1,
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <View style={{ margin: 4 }}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ marginVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              justifyContent: "space-between",
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                fontWeight: "bold",
                marginHorizontal: 5,
                fontSize: 26,
              }}>
              {listType[1] === "list" ? "List View" : "Grid View"}
            </Text>
            <TouchableOpacity
              onPress={() =>
                listType[1] === "list"
                  ? setListType([listType[0], "grid"])
                  : setListType([listType[0], "list"])
              }
              style={{ backgroundColor: "blue", padding: 5, borderRadius: 5 }}>
              <Text style={{ color: "white" }}>Đổi kiểu list</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            numColumns={listType[1] === "list" ? 1 : 2}
            data={images?.slice(21, 30)}
            key={`${listType[1] === "list" ? 1 : 2}`}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 2,
                  overflow: "hidden",
                  flex: 1,
                }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: 200, objectFit: "cover" }}
                />
                <View style={{ margin: 4 }}>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;
