import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Top from "./components/Top";
import Budget from "./components/Budget";
import CategoryList from "./components/CategoryList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Top />
        {this.state.page === 0 && <Budget />}
        {this.state.page === 1 && <CategoryList />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bottomView: {
    width: "100%",
    height: 100,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  }
});

{
  /* <View style={styles.bottomView}>
<Text style={styles.textStyle}>This is Bottom View.</Text>
</View> */
}
