import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Bar } from 'react-native-progress';
import { Icon } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.person}>
          <View style={styles.avatar}>
            <Image source={require('./avatar.png')} style={{width: 70, height: 70}}/>
          </View>
          <View style={styles.about}>
            <Text style={styles.personSkill}>Android Engineer</Text>
            <Text style={styles.personName}>Robert Steward</Text>
          </View>
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressText}>Your profile is 75% complete.</Text>
          <Bar progress={0.75} width={280} height={7} color="green" />
        </View>
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <Icon
              name='account-settings'
              type='material-community'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>My Profile</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='office-building'
              type='material-community'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>About Us</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='exclamationcircle'
              type='antdesign'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>Privacy</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='ios-settings'
              type='ionicon'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='md-help-buoy'
              type='ionicon'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>Help Center</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='ios-chatbubbles'
              type='ionicon'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>Messages</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon
              name='logout'
              type='material-community'
              color='#7E8C8D' />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    marginLeft: '8%'
  },
  person: {
    flexDirection: 'row',
    marginTop: '10%',
    marginBottom: '8%'
  },
  avatar: {
    width: '22%',
    paddingTop: '2%'
  },
  about: {
    width: '78%',
    paddingLeft: '3%',
    paddingTop: '2%'
  },
  personSkill: {
    fontSize: 25,
    color: '#2C3E50',
    fontWeight: 'bold'
  },
  personName: {
    fontSize: 18,
    color: '#252525'
  },
  progress: {
    height: '7%',
    justifyContent: 'space-between'
  },
  progressText: {
    fontSize: 16
  },
  menu: {
    justifyContent: 'space-between',
    height: '60%',
    marginTop: '10%',
    marginBottom: '8%'
  },
  menuItem: {
    height: '10%',
    flexDirection: 'row'
  },
  menuItemText: {
    fontSize: 18,
    marginLeft: '5%'
  }
});

