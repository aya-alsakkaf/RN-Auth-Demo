import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import Note from "../../components/Note";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../api/notes";
const Notes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["fetchAllNotes"],
    queryFn: () => getAllNotes(),
  });

  console.log(data);

  const displayNotes = data?.map((singleNote) => {
    return <Note note={singleNote} />;
  });
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
        // padding: 20,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {displayNotes}
      </ScrollView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
