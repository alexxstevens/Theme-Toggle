// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from "react-native";
// import {getStyleSheet} from './styles';

// console.log(getStyleSheet("LightTheme"));

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { LightTheme: false};
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }


// toggleTheme(){
//   console.log("toggle activated");
//   this.setState({LightTheme: !this.state.LightTheme});
// }



// render(){
//   const styles = getStyleSheet(this.state.LightTheme);
// return(
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Button title="light" onPress={()=>{getStyleSheet("LightTheme")}} />
//     </View>
//   </View>
// )
// }};