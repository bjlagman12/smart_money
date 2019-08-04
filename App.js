import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Top from "./components/Top";
import Budget from "./components/Budget";
import CategoryList from "./components/CategoryList";
import SaveList from './components/SaveList'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0
    };
    this.spend = this.spend.bind(this)
    this.save = this.save.bind(this)
  }
  spend() {
    this.setState({page: 1})
  }
  save() {
    console.log('test')
    this.setState({page: 2})
  }
   
  render() {
    let budget = (
      <Budget 
        spend={this.spend}
        save={this.save}
      />
    )
    return (
      <View style={styles.container}>
        <Top />
        {this.state.page === 0 && budget}
        {this.state.page === 1 && <CategoryList />}
        {this.state.page === 2 && <SaveList/>}
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
