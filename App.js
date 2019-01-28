import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
import Map from './screens/Map'
import More from './screens/More'
import FilterJobs from './screens/FilterJobs'
import FilterPros from './screens/FilterPros'
import GeolocationAct from './screens/GeolocationAct'
import NotificationAct from './screens/NotificationAct'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <More />
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
