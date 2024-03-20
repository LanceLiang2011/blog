import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const Separator = () => (
  <View
    style={{ borderBottomWidth: 1, borderColor: "gary", paddingVertical: 12 }}
  />
);

export default function IndexScreen() {
  const { state: blogPosts, addNewPost, deletePost } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Post" onPress={addNewPost} />
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatContainer}
        data={blogPosts}
        renderItem={({ item }) => (
          <View style={styles.blogWrapper}>
            <Text style={styles.title}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => deletePost(item.id)}>
              <Feather name="trash" style={styles.icon} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
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
    marginTop: 24,
  },
  flatContainer: {
    gap: 24,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
