import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import FirebaseUtils from "../utils/FirebaseUtils";

export default function HomeScreen() {
  const signOut = () => {
    FirebaseUtils.signOut().catch((e) => {
      console.log(e);
      alert("Something went wrong");
    });
  };
  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <Button title="logout" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
});
