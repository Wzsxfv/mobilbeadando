import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './src/HomeScreen';
import StoryScreen from "./src/StoryScreen";
import ShoppingListScreen from "./src/ShoppingListScreen";
import Animation from "./src/Animation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Story" component={StoryScreen} />
          <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
          <Stack.Screen name="Animation" component={Animation} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
