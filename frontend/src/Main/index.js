import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import CustomMap from "../CustomMap";
import InputBox from "../InputBox";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomMap />
        <InputBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
