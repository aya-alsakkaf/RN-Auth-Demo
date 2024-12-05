import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import Note from "../../components/Note";
const Notes = () => {
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
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </ScrollView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
