import { signInWithEmailAndPassword } from "firebase/auth";
import React, { PureComponent, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";

const LogInScreen = ({ navigation }) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handleLogIn() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <View>
      <Text> logo </Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Email"
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ alignContent: "center" }} onPress={handleLogIn}>
          login
        </Text>
      </TouchableOpacity>
      <Text>not a user? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Create an account here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  TextInput: {
    borderBottomWidth: 1.5,
    width: 200,
    marginTop: 10,
    paddingTop: 5,
    alignContent: "center",
  },
  loginButton: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 5,
    alignContent: "center",
    margin: 2,
  },
});
