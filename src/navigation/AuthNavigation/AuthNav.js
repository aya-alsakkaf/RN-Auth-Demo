import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Auth/Login";
import Register from "../../screens/Auth/Register";
import Welcome from "../../screens/Home/Welcome";
import ROUTES from "../index";
const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.HOME.WELCOME} component={Welcome} />
      <Stack.Screen name={ROUTES.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTH.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
