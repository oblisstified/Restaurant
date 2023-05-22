import React, { PureComponent } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LogInScreen = ({ navigation }) => {
  return (
    <View>
      <Text> logo </Text>
      <TextInput style={styles.TextInput} placeholder="username"></TextInput>
      <TextInput style={styles.TextInput} placeholder="password"></TextInput>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{ alignContent: "center" }}>login</Text>
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
