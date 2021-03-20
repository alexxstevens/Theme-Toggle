// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from "react-native";
// import getStyleSheet from './styles';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { SunshineTheme: false};
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }


// toggleTheme(){
//   this.setState({SunshineTheme: !this.state.SunshineTheme});
// }

// render(){
//   const styles = getStyleSheet(this.state.SunshineTheme);
//   const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
// return(
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Button title="sunshine" value="SunshineTheme" onPress={()=>{getStyleSheet(this.value)}} />
//     </View>
//   </View>
// )
// }};