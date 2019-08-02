import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { ThemeProvider, Button } from "react-native-elements";

export default class Calc extends React.Component {
  constructor() {
    super();
  }

  onPress = () => {};

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          underlayColor="skyblue"
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> Home </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

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
    // underlayColor: "#ffffff00",
    // padding: 10
    height: 100,
    width: 100
  },
  font: {
    fontWeight: "bold",
    fontSize: 30
  },
  cate: {
    color: "blue",
    fontSize: 20
  }
});
