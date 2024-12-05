import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav from "../HomeNavigation/HomeNav";
import colors from "../../data/styling/colors";
import AddNote from "../../screens/Notes/AddNote";
import AntDesign from "@expo/vector-icons/AntDesign";
import Users from "../../screens/Users/Users";
const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.tertiary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AddNote"
        component={AddNote}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitle: "All Users",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: colors.white,
            fontSize: 20,
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
