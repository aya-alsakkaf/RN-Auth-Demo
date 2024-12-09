import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ROUTES from "../index";
import Notes from "../../screens/Home/Notes";
import colors from "../../data/styling/colors";
import NoteDetails from "../../screens/Home/NoteDetails";
import { deleteToken } from "../../api/token";
import UserContext from "../../context/UserContext";
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);

  const handleLogout = async () => {
    console.log("Logout");
    await deleteToken();
    setIsAuthenticated(false);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.HOME.NOTES}
        component={Notes}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "All Notes",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Text
                style={{ color: colors.white, marginRight: 10, fontSize: 16 }}
              >
                Logout
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name={ROUTES.HOME.NOTE_DETAILS}
        component={NoteDetails}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "Note Details",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
