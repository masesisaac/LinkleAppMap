import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Svg } from 'expo';

export default class NotificationAct extends React.Component {
  onOk = () => {
    alert('ok')
  }
  onNotNow = () => {
    alert('not now')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerView}>
          <View style={styles.innerViewContent}>
            <NotificationIcon />
            <Text style={styles.textLarge}>Receive notifications</Text>
            <Text style={styles.textSmall}>Allow Linkle.io to send you push notifications?</Text>
            <Button 
              title="Ok"
              onPress={this.onOk}
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

const NotificationIcon = () => (
  <Svg width="159" height="112" viewBox="0 0 159 112" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Svg.Path fill-rule="evenodd" clip-rule="evenodd" d="M18.7916 0.882812H140.018C150.118 0.882812 158.384 9.14121 158.384 19.2486V111.407H145.604V30.0086H13.2057V111.407H0.425781V19.2486C0.425781 9.14121 8.69195 0.882812 18.7916 0.882812ZM98.7963 14.1211H60.0136C58.7861 14.1211 57.7917 15.1155 57.7917 16.3508C57.7917 17.5783 58.7861 18.5727 60.0136 18.5727H98.7963C100.024 18.5727 101.018 17.5783 101.018 16.3508C101.018 15.1155 100.024 14.1211 98.7963 14.1211Z" fill="#565656"/>
    <Svg.Rect x="13.207" y="30.0078" width="132.541" height="26.1375" fill="#F3F3F3"/>
    <Svg.Path d="M27.0766 49.5595C27.0766 50.1271 27.5595 50.5811 28.1131 50.4636C31.595 49.7248 34.2165 46.6145 34.2165 42.9013C34.2165 39.188 31.595 36.0778 28.1131 35.339C27.5595 35.2215 27.0766 35.6754 27.0766 36.2431C27.0766 36.7468 27.4617 37.1593 27.9483 37.2841C30.443 37.9237 32.2924 40.1992 32.2924 42.9013C32.2924 45.6033 30.443 47.8788 27.9483 48.5185C27.4617 48.6432 27.0766 49.0557 27.0766 49.5595Z" fill="#F1C40F"/>
    <Svg.Path d="M25.9641 49.5595C25.9641 50.1271 25.4812 50.5811 24.9276 50.4636C21.4457 49.7248 18.8242 46.6145 18.8242 42.9013C18.8242 39.188 21.4457 36.0777 24.9276 35.339C25.4812 35.2215 25.9641 35.6754 25.9641 36.2431C25.9641 36.7468 25.579 37.1593 25.0924 37.2841C22.5977 37.9237 20.7482 40.1992 20.7482 42.9013C20.7482 45.6033 22.5977 47.8788 25.0924 48.5185C25.579 48.6432 25.9641 49.0557 25.9641 49.5595Z" fill="#F1C40F"/>
    <Svg.Rect x="37.832" y="35.3203" width="61.3173" height="2.74399" fill="#E4E4E4"/>
    <Svg.Rect x="37.832" y="40.1562" width="102.374" height="10.325" fill="#E4E4E4"/>
  </Svg>
)

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
