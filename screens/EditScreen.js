import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ route, navigation }) {
  const { id } = route.params;
  const { state, editPost } = useContext(BlogContext);
  const blogPost = state.find((post) => post.id === id);
  return (
    <BlogPostForm
      initialState={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editPost(title, content, id, () => navigation.goBack())
      }
    />
  );
}

const styles = StyleSheet.create({});
