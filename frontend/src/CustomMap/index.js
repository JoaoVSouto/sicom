import React, { Component } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import {
  StyleSheet,
  PermissionsAndroid,
  ToastAndroid,
  View,
  Text
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import commonStyles from '../commonStyles';
import CustomCallout from './CustomCallout';

const latitudeDelta_ZOOMED = 0.0143;
const longitudeDelta_ZOOMED = 0.0134;

const initialState = {
  region: {
    latitude: -5.6417408,
    longitude: -36.7979101,
    latitudeDelta: 4.0143,
    longitudeDelta: 4.0134
  },
  item: null
};

export default class CustomMap extends Component {
  state = {
    ...initialState
  };

  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted) {
        // Setando posição inicial no mapa
        Geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            this.setState({
              region: {
                latitude,
                longitude,
                latitudeDelta: latitudeDelta_ZOOMED,
                longitudeDelta: longitudeDelta_ZOOMED
              }
            });
          },
          error => {
            ToastAndroid.show('Error getting location', ToastAndroid.SHORT);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

        // Vigiando a posição do usuário
        Geolocation.watchPosition(
          ({ coords: { latitude, longitude } }) => {
            this.setState({
              region: {
                latitude,
                longitude,
                latitudeDelta: latitudeDelta_ZOOMED,
                longitudeDelta: longitudeDelta_ZOOMED
              }
            });
          },
          err => console.log(err),
          { enableHighAccuracy: true }
        );
      } else {
        ToastAndroid.show('Location denied', ToastAndroid.SHORT);
        // TODO: create some warning here...
      }
    } catch {
      ToastAndroid.show('Error in permissions', ToastAndroid.SHORT);
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.item !== nextProps.item) {
      return { item: nextProps.item };
    } else {
      return null;
    }
  }

  render() {
    const { region, item } = this.state;

    return (
      <MapView
        showsUserLocation
        rotateEnabled={false}
        showsMyLocationButton={false}
        loadingEnabled
        style={styles.mapView}
        region={region}>
        {item
          ? item.location.map(place => (
              <Marker
                key={place.id}
                coordinate={{
                  latitude: place.latitude,
                  longitude: place.longitude
                }}
                pinColor={commonStyles.secondaryColor}>
                <Callout tooltip style={styles.customView}>
                  <CustomCallout>
                    <Text style={{ color: '#333' }}>{place.nome}</Text>
                  </CustomCallout>
                </Callout>
              </Marker>
            ))
          : null}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: -25,
    position: 'absolute'
  },
  customView: {
    width: 140,
    height: 70
  },
  view: {
    borderWidth: 2,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12
  }
});
