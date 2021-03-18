import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DarkTheme from './Components/Themes/DarkTheme';
import HalloweenTheme from './Components/Themes/HalloweenTheme';
import PattyTheme from './Components/Themes/PattyTheme';
import SunshineTheme from './Components/Themes/SunshineTheme';

export default function App() {
  return 
  <>
    <HalloweenTheme />
    <DarkTheme />
    <PattyTheme />
    <SunshineTheme />
    </>;
}


