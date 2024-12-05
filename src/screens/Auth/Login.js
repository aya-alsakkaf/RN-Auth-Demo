import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ width: "100%", padding: 20 }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Login
        </Text>
        <Text style={{ color: colors.white, fontSize: 16 }}>
          Login to your account
        </Text>

        <TextInput
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          placeholder="Email"
        />

        <TextInput
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          placeholder="Password"
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 20, alignItems: "center" }}>
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Don't have an account?{" "}
            <Text
              style={{ color: colors.white, fontWeight: "bold" }}
              onPress={() => navigation.navigate(ROUTES.AUTH.REGISTER)}
            >
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
