import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../navigation";

const Note = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          width: "100%",
          borderRadius: 15,
          minHeight: 180,
          elevation: 5,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{
            color: colors.black,
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          Dawood
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: 16,
            fontWeight: "600",
            opacity: 0.8,
          }}
        >
          Created By: Dawood
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              backgroundColor: colors.tertiary,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}
          >
            <Text>Topic 1</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.tertiary,
              padding: 12,
              borderRadius: 10,
              marginBottom: 5,
            }}
          >
            <Text>Topic 2</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.tertiary,
            padding: 12,
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() => navigation.navigate(ROUTES.HOME.NOTE_DETAILS)}
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Note;
