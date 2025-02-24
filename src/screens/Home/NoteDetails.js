import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import { useQuery } from "@tanstack/react-query";
import { getNote } from "../../api/notes";

const NoteDetails = ({ route }) => {
  const { noteID } = route.params;
  const { data, isLoading } = useQuery({
    queryKey: ["getOneNote"],
    queryFn: () => {
      return getNote(noteID);
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.primary,
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          borderRadius: 15,
          minHeight: 200,
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
            color: colors.white,
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          {data?.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {data?.topic.map((topic) => {
            return (
              <View
                style={{
                  backgroundColor: colors.tertiary,
                  padding: 12,
                  borderRadius: 10,
                }}
              >
                <Text style={{ color: colors.white }}>{topic}</Text>
              </View>
            );
          })}
        </View>

        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {data?.body}
        </Text>
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({});
