import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { BlogProvider } from "./context/BlogContext";
import IndexScreen from "./screens/IndexScreen";
import ShowScreen from "./screens/ShowScreen";
import CreateScreen from "./screens/CreateScreen";
import EditScreen from "./screens/EditScreen";

import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{ title: "Blog" }}
        >
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() => navigation.navigate("Create")}
                >
                  <AntDesign name="pluscircle" size={20} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={styles.icon}
                  onPress={() =>
                    navigation.navigate("Edit", { id: route.params.id })
                  }
                >
                  <AntDesign name="edit" size={20} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  icon: {
    right: 24,
  },
});
