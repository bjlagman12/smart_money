import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";
import Category from "./Category";

export default class Calc extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log("test");
  }

  render() {
    const list = [
      "Home",
      "Dining",
      "Groceries",
      "Auto",
      "Transportation",
      "Entertainmet",
      "Gym",
      "Phone",
      "Shopping"
    ];
    return (
      <View style={styles.container}>
        {list.map((cat, key) => (
          <Category cat={cat} key={key} onPress={this.onPress} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "space-around",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 175,
    flexWrap: "wrap"
  }
});
