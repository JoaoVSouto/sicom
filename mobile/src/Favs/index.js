import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Item from '../Item';

export default class Favs extends Component {
  state = {
    items: null
  };

  screenEntered = async () => {
    const data = await AsyncStorage.getItem('items');
    const items = JSON.parse(data) || [];
    const itemsObj = items.map((item, index) => {
      return {
        key: index,
        name: item
      };
    });
    this.setState({ items: itemsObj });
  };

  removeItem = itemName => {
    const items = [...this.state.items];
    const itemsRemoved = items.filter(item => item.name !== itemName);
    this.setState({ items: itemsRemoved }, () => {
      const itemsRaw = this.state.items.map(item => item.name);
      AsyncStorage.setItem('items', JSON.stringify(itemsRaw));
    });
  };

  renderItem = ({ item }) => {
    return (
      <Item
        {...item}
        removeItem={this.removeItem}
        findItem={this.props.navigation.navigate}
      />
    );
  };

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        <NavigationEvents onDidFocus={this.screenEntered} />
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={this.props.navigation.openDrawer}>
              <Icon
                name="arrow-left"
                style={{ textAlign: 'center' }}
                size={20}
                color={'#EEE'}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Meus Medicamentos</Text>
          </View>
          <View style={styles.list}>
            {items && items.length ? null : <Warning />}
            <FlatList
              data={items}
              renderItem={this.renderItem}
              keyExtractor={(item, _) => item.key.toString()}
            />
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    width: '100%',
    height: Dimensions.get('window').height * 0.1,
    borderBottomWidth: 3,
    borderColor: '#6fbddb',
    elevation: 5
  },
  title: {
    fontSize: 24,
    color: '#333',
    position: 'absolute',
    fontWeight: 'bold'
  },
  iconButton: {
    backgroundColor: '#6dd5ed',
    borderRadius: 6,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    alignSelf: 'flex-start',
    marginLeft: 12,
    elevation: 10
  },
  list: {
    width: '100%',
    flex: 1
  }
});

const Warning = props => (
  <View style={warningStyles.container}>
    <Icon name="exclamation-triangle" size={100} color={'#6dd5ed'} />
    <Text style={warningStyles.ops}>Ops!</Text>
    <Text style={warningStyles.subtitle}>
      Você ainda não tem nenhum remédio na sua lista.
    </Text>
  </View>
);

const warningStyles = StyleSheet.create({
  container: {
    width: '80%',
    height: '80%',
    marginVertical: Dimensions.get('window').height * 0.2,
    marginHorizontal: Dimensions.get('window').width * 0.08,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  ops: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 26,
    color: '#333',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});
