import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default (Save = ({ save, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text> {save} </Text>
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
