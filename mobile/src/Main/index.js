import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomMap from '../CustomMap';
import InputBox from '../InputBox';
import MainModal from '../MainModal';
import RequirementsModal from '../RequirementsModal';

export default class Main extends Component {
  state = {
    item: null,
    info: null,
    openModal: false
  };

  updateItem = item => {
    this.setState({ item });
  };

  calloutPressed = info => {
    this.setState({ info });
  };

  attModal = openModal => {
    this.setState({ openModal });
  };

  attInfo = () => {
    this.setState({ info: null });
  };

  render() {
    const { item, info, openModal } = this.state;
    const name = this.props.navigation.getParam('name', null);

    return (
      <View style={styles.container}>
        <CustomMap item={item} calloutPressed={this.calloutPressed} />
        <InputBox
          updateItem={this.updateItem}
          openDrawer={this.props.navigation.openDrawer}
          searchName={name}
        />
        <MainModal
          info={info}
          attInfo={this.attInfo}
          attModal={this.attModal}
        />
        <RequirementsModal openModal={openModal} attModal={this.attModal} />
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
