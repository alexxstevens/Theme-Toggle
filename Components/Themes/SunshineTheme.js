import React, {Component} from 'react';
import {render} from "react-dom";
import {Button, StyleSheet, View} from "react-native";
import getStyleSheet from './styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {SunshineTheme: false};
    this.toggleTheme = this.toggleTheme.bind(this);
  }


toggleTheme(){
  this.setState({sunshineTheme: !this.state.sunshineTheme});
}

render(){
  const styles = getStyleSheet(this.state.sunshineTheme);
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;
return(
  <View style={styles.container}>
    <View style={styles.box}>
      <Button title={backgroundColor} onPress={this.toggleTheme} />
    </View>
  </View>
)
}}