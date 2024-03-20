import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

export default function IndexScreen() {
  const { state: blogPosts, addNewPost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addNewPost} />
      <FlatList
        contentContainerStyle={styles.flatList}
        data={blogPosts}
        renderItem={({ item }) => (
          <View style={styles.blogWrapper}>
            <Text>{item.title}</Text>
            <Feather name="trash" size={24} color="black" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blogWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 36,
  },
  flatList: {
    gap: 24,
  },
});
