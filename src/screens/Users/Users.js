import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../../components/UserItem";
import colors from "../../data/styling/colors";
import { SafeAreaView } from "react-native-safe-area-context";
const Users = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
      <UserItem />
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({});
