import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

const theme = {
  Button: {
    width: 50,
    height: 50,
    // backgroundColor: "powderblue"
  }
};

export default (Budget = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
    </ThemeProvider>
  );
});
