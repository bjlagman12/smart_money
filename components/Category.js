import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default (Category = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text> Home </Text>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    height: 100,
    width: 100
  }
});
