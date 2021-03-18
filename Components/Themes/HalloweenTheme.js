import React, {Component} from 'react';
import {Button, StyleSheet, View} from "react-native";
import getStyleSheet from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { HalloweenTheme: false};
    this.toggleTheme = this.toggleTheme.bind(this);
  }


toggleTheme(){
  this.setState({halloweenTheme: !this.state.halloweenTheme});
}

render(){
  const styles = getStyleSheet(this.state.halloweenTheme);
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
  console.log(StyleSheet.flatten(styles.container).backgroundColor);
return(
  <View style={styles.container}>
    <View style={styles.box}>
      <Button title="Halloween" value="halloweenTheme" onPress={getStyleSheet.this.value} />
    </View>
  </View>
)
}};