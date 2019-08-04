import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Useless Placeholder"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.budget}>THIS IS YOUR BUDGET</Text>
        <Text style={styles.budget}>$1000</Text>
        <View style={styles.lowerContainer}>
          {console.log(this.props.navigation.navigate)}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("CategoryList")}
          >
            <Text> SPEND </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Calculator")}
          >
            <Text> DEPOSIT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SaveList")}
          >
            <Text>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  budget: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "black",
    // borderWidth: 1
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    height: 100,
    width: 100
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
    // padding: 50
  },
  lowerContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 75,
    // alignItems: "center",
    // alignContent: "space-around",
    // paddingHorizontal: 15,
    // paddingTop: 10,
    // paddingBottom: 175,
    // flexWrap: "wrap",
    bottom: 0
  }
});
