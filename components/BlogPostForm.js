import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function BlogPostForm({ onSubmit, initialState }) {
  const [title, setTitle] = useState(initialState.title);
  const [content, setContent] = useState(initialState.content);
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
        multiline
      />
      <Button
        title="Add"
        onPress={() => {
          setTitle("");
          setContent("");
          onSubmit(title, content);
        }}
      />
    </View>
  );
}

BlogPostForm.defaultProps = { initialState: { title: "", content: "" } };

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 12,
  },
});
