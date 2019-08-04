import React from 'react'
import { View, TextInput } from 'react-native'


export default class Calculator extends React.Component {
  static navigationOptions = {
    title: 'Calculator',
  };
  constructor(){
    super();
    this.state = { text: 'Useless Placeholder' };
  }
  render(){
    return(
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
} 