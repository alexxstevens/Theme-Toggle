// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from "react-native";
// import getStyleSheet from './styles';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { DarkTheme: false};
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }


// toggleTheme(){
//   this.setState({DarkTheme: !this.state.DarkTheme});
// }

// render(){
//   const styles = getStyleSheet(this.state.DarkTheme);
//   const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
// return(
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Button title="dark" value="DarkTheme" onPress={()=>{getStyleSheet(this.value)}} />
//     </View>
//   </View>
// )
// }};
