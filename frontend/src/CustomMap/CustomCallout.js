import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import commonStyles from '../commonStyles';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object
};

class CustomCallout extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={styles.bubble}>
          <View style={styles.amount}>{this.props.children}</View>
          <View style={styles.arrow} />
        </View>
      </View>
    );
  }
}

CustomCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    position: 'relative'
  },
  bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: commonStyles.mainColor,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: commonStyles.secondaryColor,
    borderWidth: 3
  },
  amount: {
    flex: 1
  },
  arrow: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50
  }
});

export default CustomCallout;
