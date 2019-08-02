import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import Top from "./components/Top";
import Budget from "./components/Budget";
import Calc from "./components/Calc";

class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Top />
        <Calc />

        <View style={styles.bottomView}>
        <Budget />
          <Text style={styles.textStyle}>This is Bottom View.</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  font: {
    fontWeight: "bold",
    fontSize: 30
  },
  cate: {
    color: "blue",
    fontSize: 20
  },
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  textStyle: {
    color: "#fff",
    fontSize: 22
  }
});
