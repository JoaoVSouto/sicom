import React, { Component } from "react";
import MapView from "react-native-maps";
import { StyleSheet, PermissionsAndroid, ToastAndroid } from "react-native";
import Geolocation from "react-native-geolocation-service";

const latitudeDelta_ZOOMED = 0.0143;
const longitudeDelta_ZOOMED = 0.0134;

export default class CustomMap extends Component {
  state = {
    region: {
      latitude: -5.6417408,
      longitude: -36.7979101,
      latitudeDelta: 4.0143,
      longitudeDelta: 4.0134
    }
  };

  componentDidMount() {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
      .then(granted => {
        if (granted) {
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
              ToastAndroid.show("Error getting location", ToastAndroid.SHORT);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
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
          ToastAndroid.show("Location denied", ToastAndroid.SHORT);
          // TODO: create some warning here...
        }
      })
      .catch(err =>
        ToastAndroid.show("Error in permissions", ToastAndroid.SHORT)
      );
  }

  render() {
    const { region } = this.state;

    return (
      <MapView
        showsUserLocation
        rotateEnabled={false}
        showsMyLocationButton={false}
        loadingEnabled
        style={styles.mapView}
        region={region}
      />
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
    position: "absolute"
  }
});
