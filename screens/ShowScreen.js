import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";

export default function ShowScreen({ route }) {
  const { state } = useContext(BlogContext);
  const blogPost = state.find((post) => post.id === route.params.id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
