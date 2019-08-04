import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from "react-native";

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
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ text })}
          placeholderTextColor="blue"
          placeholder="What is your budget"
        />
        <View style={styles.lowerContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.spend()}
          >
            <Text> SPEND </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> DEPOSIT </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => this.props.save()}
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
    alignItems: "center"
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
