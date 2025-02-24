import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import colors from "../../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import UserContext from "../../context/UserContext";
const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      alert("Welcome");
      setIsAuth(true);
    },
    onError: () => {
      alert("Something went wrong");
    },
  });
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
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, email: value });
          }}
        />

        <TextInput
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          placeholder="Password"
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, password: value });
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={() => {
            mutate();
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
