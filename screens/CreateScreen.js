import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function CreateScreen({ navigation }) {
  const { addNewPost } = useContext(BlogContext);
  const handleSubmit = (title, content) => {
    addNewPost(
      title,
      content,
      Math.floor(Math.random() * 999999).toString(),
      () => {
        navigation.navigate("Index");
      }
    );
  };
  return <BlogPostForm onSubmit={handleSubmit} />;
}

const styles = StyleSheet.create({});
