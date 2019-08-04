import React from "react";
import { StyleSheet } from "react-native";
import Budget from "./components/Budget";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";

import CategoryList from "./components/CategoryList";
import SaveList from "./components/SaveList";
import Calculator from "./components/Calculator";

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       page: 0
//     };
//     this.spend = this.spend.bind(this)
//     this.save = this.save.bind(this)
//     this.home = this.home.bind(this)
//   }
//   spend() {
//     console.log('spend')
//     this.setState({page: 1})
//   }
//   save() {
//     console.log('save')
//     this.setState({page: 2})
//   }
//   home() {
//     console.log('home')
//     this.setState({page: 0})
//   }

//   render() {
//     let budget = (
//       <Budget
//         spend={this.spend}
//         save={this.save}
//       />
//     )
//     let home = (
//       <Top
//         home={this.home}
//       />
//     )
//     return (
//       <View style={styles.container}>
//         {home}
//         {this.state.page === 0 && budget}
//         {this.state.page === 1 && <CategoryList />}
//         {this.state.page === 2 && <SaveList/>}
//       </View>
//     );
//   }
// }

//

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator(
  {
    Budget,
    CategoryList,
    SaveList,
    Calculator
  },
  {
    initialRouteName: "Budget"
  }
);

const AppContainer = createAppContainer(RootStack);

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



// {
//   /* <View style={styles.bottomView}>
// <Text style={styles.textStyle}>This is Bottom View.</Text>
// </View> */
// }

// import React, { Component } from 'react'
// import { View, Text, StyleSheet, Button } from 'react-native'
// import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

// export default class App extends Component {
//   render() {
//     return(
//      <AppContainer/>
//     )
//   }
// }

// class WelcomeScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button title="Login" onPress={()=> this.props.navigation.navigate('Dashboard')}/>
//         <Button title="Sign up" onPress={()=> alert('button pressed')}/>
//       </View>
//     )
//   }
// }

// class DashboardScreen extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Dashboard Screen</Text>
//         <Button title='home' onPress={() => this.props.navigation.navigate('Welcome')}/>
//       </View>
//     )
//   }
// }

// class Feed extends Component {
//   static navigationOptions = {
//     title: 'Feed'
//   };
//   render(){
//     return(
//       <View style={styles.container}>
//         <Text>Feed</Text>
//       </View>
//     )
//   }
// }

// class Settings extends Component {
//   static navigationOptions = {
//     title: 'Settings'
//   };
//   render(){
//     return(
//       <View style={styles.container}>
//         <Text>Settings</Text>
//       </View>
//     )
//   }
// }

// const DashboardTabNavigator = createBottomTabNavigator({
//   Feed,
//   Settings
// })

// const DashboardStackNavigator = createStackNavigator({
//   DashboardTabNavigator: DashboardTabNavigator
// })

// const AppDrawerNavigator = createDrawerNavigator({
//   Welcome: {
//     screen: WelcomeScreen
//   },
//   Dashboard: {
//     screen: DashboardStackNavigator
//   }
// })

// const AppSwitchNavigator = createSwitchNavigator({
//   Welcome: {
//     screen: WelcomeScreen
//   },
//   Dashboard: {
//     screen: AppDrawerNavigator
//   }
// })

// const AppContainer = createAppContainer(AppSwitchNavigator)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })

// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             /* 1. Navigate to the Details route with params */
//             this.props.navigation.navigate('Details', {
//               itemId: 86,
//               otherParam: 'anything you want here',
//             });
//           }}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Details',
//   };

//   render() {
//     /* 2. Get the param, provide a fallback value if not available */
//     const { navigation } = this.props;
//     const itemId = navigation.getParam('itemId', 'NO-ID');
//     const otherParam = navigation.getParam('otherParam', 'some default value');

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>itemId: {JSON.stringify(itemId)}</Text>
//         <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             this.props.navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })}
//         />
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
