import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav from "../HomeNavigation/HomeNav";
import colors from "../../data/styling/colors";
import AddNote from "../../screens/Notes/AddNote";
import AntDesign from "@expo/vector-icons/AntDesign";
import Users from "../../screens/Users/Users";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteToken } from "../../api/storage";
import UserContext from "../../context/UserContext";
const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
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
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  deleteToken();
                  setIsAuth(false);
                }}
              >
                {/* Delete the token, setIsAuth to false */}
                <MaterialIcons name="logout" size={30} color="red" />
              </TouchableOpacity>
            );
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
