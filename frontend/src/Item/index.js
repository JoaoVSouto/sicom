import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonComponent from 'react-native-button-component';

export default props => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.name}</Text>
    <View style={styles.buttonContainer}>
      <ButtonComponent
        onPress={() => props.findItem('Main', { name: props.name })}
        text="Encontrar"
        type="primary"
        shape="round"
        backgroundColors={['#2193b0', '#6dd5ed']}
        gradientStart={{ x: 0.5, y: 1 }}
        gradientEnd={{ x: 1, y: 1 }}
        height={40}
        width={120}
        style={{ marginRight: 15 }}
      />
      <ButtonComponent
        onPress={() => props.removeItem(props.name)}
        text="Apagar"
        type="primary"
        shape="round"
        backgroundColors={['#c31432', '#c31432']}
        gradientStart={{ x: 1, y: 1 }}
        gradientEnd={{ x: 0, y: 0 }}
        height={40}
        width={120}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 5,
    margin: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 14
  }
});
