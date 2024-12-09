import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import colors from "../../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { login, register } from "../../api/auth";
import { saveToken } from "../../api/token";

const Register = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    name: "",
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append("email", userInfo.email);
      formData.append("password", userInfo.password);
      formData.append("name", userInfo.name);
      formData.append("image", {
        uri: image,
        type: "image/jpeg",
        name: "profile.jpg",
      });

      const response = await register(formData);
      console.log("Response from register:", response);
    } catch (error) {
      if (error.response) {
        // Log the 400 response properly
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
          Register
        </Text>
        <Text style={{ color: colors.white, fontSize: 16 }}>
          Create your account
        </Text>

        <TextInput
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          placeholder="Name"
          value={userInfo.name}
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
        />

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

        <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={handleRegister}
        >
          <Text
            style={{
              color: colors.primary,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20, alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Already have an account?{" "}
            <Text style={{ color: colors.white, fontWeight: "bold" }}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
