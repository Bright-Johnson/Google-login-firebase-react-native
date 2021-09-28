import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import FirebaseUtils from "../utils/FirebaseUtils";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   sign in or sign up
  const [create, setCreate] = useState(false);

  const singIn = () => {
    FirebaseUtils.signIn(email, password).catch((e) => {
      console.log(e);
      alert("Email or password is invalid");
    });
  };

  const singUp = () => {
    FirebaseUtils.signUp(email, password).catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.textInput}
      />
      <TextInput
        placeholder="password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={styles.textInput}
      />
      {create ? (
        <>
          <Button title="Sign Up" onPress={() => singUp()} />
          <Text style={styles.text} onPress={() => setCreate(false)}>
            Sign In
          </Text>
        </>
      ) : (
        <>
          <Button title="Sign in" onPress={() => singIn()} />
          <Text style={styles.text} onPress={() => setCreate(true)}>
            Create an Account
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    // alignItems: "center",
    justifyContent: "center",
    // padding: 10,
    // width: 300,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginBottom: 20,
    borderRightColor: 5,
    // // width: 80,
    // height: 50,
  },
  text: {
    fontSize: 14,
    color: "blue",
    paddingTop: 20,
  },
});
