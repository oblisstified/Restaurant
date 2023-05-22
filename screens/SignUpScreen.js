import React, { Component, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

const SignUpScreen = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [username, setUsername] = useState("");

  let [validEmail, setValidEmail] = useState(true);
  let [validPassword, setValidPassword] = useState(true);
  //TODO: username also needs to be unique
  let [validUsername, setValidUsername] = useState(true);

  function validate() {
    validEmail = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setValidEmail(validEmail);

    validPassword = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    setValidPassword(validPassword);

    validUsername = username.match(/^[a-zA-Z0-9_.]+$/);
    setValidUsername(validUsername);

    return validEmail && validPassword && validUsername;
  }
  function PasswordsMatch() {
    return password.valueOf() == confirmPassword.valueOf();
  }

  function handleSignUp() {
    if (!validate() || !PasswordsMatch()) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
    console.log(email);
  }

  return (
    <View>
      <View>
        <TextInput
          placeholder="Username"
          onChangeText={(newtext) => setUsername(newtext)}
        ></TextInput>
        <Text style={{ color: "red" }}>
          {!validUsername && (
            <Text>
              Usernames can only use letters, numbers, underscores, and periods.
            </Text>
          )}
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={(newtext) => setEmail(newtext)}
        ></TextInput>
        <Text style={{ color: "red" }}>
          {!validEmail && <Text>Email is invalid</Text>}
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Password"
          onChangeText={(newtext) => setPassword(newtext)}
        ></TextInput>
        <Text style={{ color: "red" }}>
          {!validPassword && (
            <Text>
              Password must be between 6 to 20 characters, contain at least one
              numeric digit, one uppercase and one lowercase letter
            </Text>
          )}
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Confirm Password"
          onChangeText={(newtext) => setConfirmPassword(newtext)}
        ></TextInput>
        <Text style={{ color: "red" }}>
          {!PasswordsMatch() && <Text>Passwords do not match</Text>}
        </Text>
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
