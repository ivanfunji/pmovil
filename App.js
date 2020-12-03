import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.boxed}>
        <View style={[styles.box, styles.purple]}></View>
        <View style={[styles.box, styles.blue]}></View>
        <View style={[styles.box, styles.blue]}></View>
        <View style={[styles.box, styles.black]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    flexWrap: "wrap"
    
  },boxed: {
    alignItems: "center",
    justifyContent: "space-around",
    height: '80%',
    width: '100%',
  },
  box: {
    width: 100,
    height: 100,
  },
  blue: {
    backgroundColor: "#7cd",
    width: 300,
    height: 50

  },
  purple: {
    backgroundColor: "purple",
    width: 300,
    height: 200
  },
  black: {
    backgroundColor: "black",
    height: 50,
    width: 180
  },
});
