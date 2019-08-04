import React from "react";
import { StyleSheet, View } from "react-native";
import Save from "./Save";

export default class SaveList extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log("save");
  }

  render() {
    const list = [
      "Bank",
      "Leasure",
      "Add",
    ];
    return (
      <View style={styles.container}>
        {list.map((save, key) => (
          <Save save={save} key={key} onPress={this.onPress} />
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
