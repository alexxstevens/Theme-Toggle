// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from "react-native";
// import getStyleSheet from './styles';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { PattyTheme: false};
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }


// toggleTheme(){
//   this.setState({PattyTheme: !this.state.PattyTheme});
// }

// render(){
//   const styles = getStyleSheet(this.state.PattyTheme);
//   const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
// return(
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Button title="patty" value="PattyTheme" onPress={()=>{getStyleSheet(this.value)}} />
//     </View>
//   </View>
// )
// }};