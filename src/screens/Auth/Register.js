import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import colors from "../../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/auth";
import UserContext from "../../context/UserContext";

const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuth, setIsAuth } = useContext(UserContext);

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Account created");
      setIsAuth(true);
    },
    onError: () => {
      alert("Error in creating account");
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
          onChangeText={(value) => {
            setUserInfo({ ...userInfo, name: value });
          }}
        />

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
          style={{ marginTop: 20 }}
          onPress={() => {
            pickImage();
          }}
        >
          <Text style={{ color: colors.white, fontSize: 16 }}>
            Upload Profile Image
          </Text>
        </TouchableOpacity>

        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 200,
              height: 200,
            }}
          />
        )}
        <TouchableOpacity
          style={{
            backgroundColor: colors.white,
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
            alignItems: "center",
          }}
          onPress={() => {
            console.log(userInfo);
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

const styles = StyleSheet.create({});
