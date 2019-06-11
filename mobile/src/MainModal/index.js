import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonComponent from 'react-native-button-component';
import AsyncStorage from '@react-native-community/async-storage';

export default class MainModal extends Component {
  state = {
    info: null,
    buttonState: 'save'
  };

  // TODO: renderizar o asyncstorage toda vez q o modal for aberto
  // USAR O ASYNCSTORAGE NO MAIN QUANDO O CALLOUT FOR APERTADO
  // LER TUDO E MANDAR COMO PROP PRA CÁ
  async componentDidMount() {
    const data = await AsyncStorage.getItem('items');
    const items = JSON.parse(data) || [];
    this.setState({ items });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.info !== nextProps.info) {
      let buttonState = 'save';

      if (nextProps.info) {
        if (prevState.items.find(item => item === nextProps.info.itemName)) {
          buttonState += 'd';
        }
      }

      return {
        info: nextProps.info,
        buttonState: buttonState
      };
    } else {
      return null;
    }
  }

  componentDidUpdate() {
    if (this.state.info) {
      this.refs.modal.open();
    }
  }

  render() {
    const { info, buttonState, items } = this.state;

    return (
      <Modal
        style={styles.modal}
        position={'center'}
        backButtonClose={true}
        ref={'modal'}
        onClosed={() => this.props.attInfo()}>
        {info ? (
          <React.Fragment>
            <Text style={styles.title}>Posto médco:</Text>
            <View style={styles.iconText}>
              <Icon name="clinic-medical" size={15} color={'red'} />
              <Text style={styles.info}>{info.locationName}</Text>
            </View>
            <Text style={styles.title}>Remédio:</Text>
            <View style={styles.iconText}>
              <Icon name="pills" size={15} color={'blue'} />
              <Text style={styles.info}>{info.itemName}</Text>
            </View>
            <Text style={styles.title}>Quantidade disponível:</Text>
            <View style={styles.iconText}>
              <Icon
                name={info.quantity === 0 ? 'minus-circle' : 'layer-group'}
                size={15}
                color={info.quantity === 0 ? 'red' : 'green'}
              />
              <Text style={styles.info}>
                {info.quantity === 0
                  ? 'Falta em estoque'
                  : info.quantity + ' medicamento(s)'}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <ButtonComponent
                type="primary"
                shape="round"
                backgroundColors={['#4DC7A4', '#66D37A']}
                gradientStart={{ x: 0.5, y: 1 }}
                gradientEnd={{ x: 1, y: 1 }}
                height={40}
                width={120}
                style={{ marginRight: 5 }}
                buttonState={buttonState}
                states={{
                  save: {
                    onPress: () => {
                      const itemsState = [...items, info.itemName];
                      this.setState(
                        { buttonState: 'saved', items: itemsState },
                        () => {
                          AsyncStorage.setItem(
                            'items',
                            JSON.stringify(itemsState)
                          );
                        }
                      );
                    },
                    text: 'Salvar'
                  },
                  saved: {
                    onPress: () => {
                      const itemsState = [...items];
                      const newItems = itemsState.filter(
                        item => item !== info.itemName
                      );
                      this.setState(
                        { buttonState: 'save', items: newItems },
                        () => {
                          AsyncStorage.setItem(
                            'items',
                            JSON.stringify(newItems)
                          );
                        }
                      );
                    },
                    text: 'Salvo!'
                  }
                }}
              />
              <ButtonComponent
                onPress={() => {
                  this.props.attModal(true);
                }}
                text="Requerimentos"
                type="primary"
                shape="round"
                backgroundColors={['#4568DC', '#4074A8']}
                gradientStart={{ x: 0.5, y: 1 }}
                gradientEnd={{ x: 1, y: 1 }}
                height={40}
                width={120}
              />
            </View>
          </React.Fragment>
        ) : null}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    padding: 15,
    height: 252,
    width: 300,
    borderRadius: 12
  },
  title: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center'
  },
  info: {
    paddingLeft: 4,
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  iconText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10
  }
});
