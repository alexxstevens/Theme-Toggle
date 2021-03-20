// import React, {Component} from 'react';
// import {Button, StyleSheet, View} from "react-native";
// import getStyleSheet from './styles';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { HalloweenTheme: false};
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }


// toggleTheme(){
//   this.setState({HalloweenTheme: !this.state.HalloweenTheme});
// }

// render(){
//   const styles = getStyleSheet(this.state.HalloweenTheme);
//   const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
// return(
//   <View style={styles.container}>
//     <View style={styles.box}>
//       <Button title="halloween" value="HalloweenTheme" onPress={()=>{getStyleSheet(this.value)}} />
//     </View>
//   </View>
// )
// }};