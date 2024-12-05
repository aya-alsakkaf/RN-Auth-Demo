import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.primary,
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          marginBottom: 20,
        }}
      >
        Unleash Your Creativity
      </Text>

      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        Welcome to our note-taking platform, where ideas flourish and knowledge
        grows. Capture your thoughts, jot down inspiration, and organize your
        life—all in one place.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate(ROUTES.AUTH.LOGIN)}
      >
        <Text style={{ color: colors.primary, fontWeight: "bold" }}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
