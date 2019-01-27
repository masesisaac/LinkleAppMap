import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  state = {
    center: {
      latitude: 28.5383,
      longitude: -81.3792,
      latitudeDelta: 0.252,
      longitudeDelta: 0.2621,
    },
    circleRadius: 8046.72 // 5 miles (in meters)
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={{flex: 1}}
          initialRegion={this.state.center}
        >
          <MapView.Circle
            center={this.state.center}
            radius={this.state.circleRadius}
            strokeColor="#F1C40F"
            fillColor="rgba(241, 196, 15, 0.24)"
          />
          <MapView.Marker
            coordinate={this.state.center}
            title="5 mil"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
