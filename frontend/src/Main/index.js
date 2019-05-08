import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomMap from '../CustomMap';
import InputBox from '../InputBox';

export default class Main extends Component {
  state = {
    item: null
  };

  updateItem = item => {
    this.setState({ item });
  };

  render() {
    const { item } = this.state;

    return (
      <View style={styles.container}>
        <CustomMap item={item} />
        <InputBox updateItem={this.updateItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
