import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonComponent from 'react-native-button-component';
import commonStyles from '../commonStyles';

export default props => (
  <Modal
    style={styles.modal}
    position={'center'}
    backButtonClose={true}
    isOpen={props.openModal}
    onClosed={() => props.attModal(false)}>
    <View style={styles.container}>
      <Text style={styles.title}>Requerimentos</Text>
      <View style={styles.inContainer}>
        <View style={styles.composed}>
          <Icon style={styles.icon} name="id-card" size={15} />
          <Text style={styles.text}>RG</Text>
        </View>
        <View style={styles.composed}>
          <Icon style={styles.icon} name="first-aid" size={15} />
          <Text style={styles.text}>Cartão SUS</Text>
        </View>
        <View style={styles.composed}>
          <Icon
            style={[styles.icon, { marginRight: 9 }]}
            name="notes-medical"
            size={15}
          />
          <Text style={styles.text}>Receita médica</Text>
        </View>
      </View>
      <ButtonComponent
        onPress={() => props.attModal(false)}
        text="Fechar"
        type="primary"
        shape="round"
        backgroundColors={[
          commonStyles.secondaryColor,
          commonStyles.secondaryColor
        ]}
        gradientStart={{ x: 0.5, y: 1 }}
        gradientEnd={{ x: 1, y: 1 }}
        height={40}
        width={120}
        style={styles.button}
      />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modal: {
    padding: 15,
    height: 252,
    width: 300,
    borderRadius: 12
  },
  title: {
    fontSize: 26,
    color: 'black',
    borderBottomWidth: 1,
    borderColor: '#BBB'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  composed: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    paddingVertical: 5
  },
  text: {
    color: '#333',
    fontSize: 18,
    textAlign: 'left'
  },
  icon: {
    color: '#555',
    marginRight: 5
  },
  inContainer: {
    marginVertical: 20
  }
});
