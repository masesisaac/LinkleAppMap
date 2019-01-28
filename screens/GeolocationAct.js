import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default class GeolocationAct extends React.Component {
  onActivateLocation = () => {
    alert('activate location')
  }
  onNotNow = () => {
    alert('not now')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View style={styles.innerViewContent}>
            <Icon name='location-on' color="#F1C40F" size={90} />
            <Text style={styles.textLarge}>Activate your location</Text>
            <Text style={styles.textSmall}>Let us show you some job opportunities near you!</Text>
            <Button 
              title="Activate Location"
              onPress={this.onActivateLocation}
              containerStyle={{
                width: '100%'
              }}
              buttonStyle={{
                backgroundColor: '#F1C40F',
                borderRadius: 50
              }} />
              <Text  onPress={this.onNotNow} style={styles.bottomText}>Not now</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerView: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '55%',
    borderColor: '#E4E4E4',
    borderWidth: 2,
    borderRadius: 10
  },
  innerViewContent: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
  },
  textLarge: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#34495E',
    textAlign: 'center'
  },
  textSmall: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#95A5A6'
  },
  bottomText: {
    fontWeight: '800',
    textAlign: 'center',
    color: '#4D6072'
  }
});
