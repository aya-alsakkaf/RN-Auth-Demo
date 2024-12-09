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
import { login } from "../../api/auth";
import { saveToken } from "../../api/token";
import UserContext from "../../context/UserContext";
const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useContext(UserContext);

  const handleLogin = async () => {
    try {
      console.log(userInfo);
      const data = await login(userInfo);
      console.log(data);
      await saveToken(data.token);
      setIsAuthenticated(true);
    } catch (error) {
      if (error.response) {
        console.log("Error Response Status:", error.response.status);
        console.log("Error Response Data:", error.response.data);
      } else if (error.request) {
        // If the request was made but no response was received
        console.log("No response received:", error.request);
      } else {
        // If something else happened
        console.log("Error in setting up request:", error.message);
      }
      console.error("Error object:", error);
    }
  };

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
          value={userInfo.email}
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />

        <TextInput
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          placeholder="Password"
          secureTextEntry={true}
          value={userInfo.password}
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={handleLogin}
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
