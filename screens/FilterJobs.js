import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Slider, Input, Icon, CheckBox, Button } from 'react-native-elements';

export default class FilterJobs extends React.Component {
  onApplyFilters = () => {
    alert('apply filter')
  }
  onBack = () => {
    alert('go back')
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Icon name='arrow-back' onPress={this.onBack} color="#F1C40F" size={30} containerStyle={{marginRight: 'auto'}} />
        <Text style={styles.header}>Filters</Text>
        <View>
          <View style={styles.distanceContainer}>
            <View style={styles.distance}>
              <Text style={styles.title}>Distance</Text>
              <Text style={[styles.title, {marginLeft: 'auto'}]} >5 miles</Text>
            </View>
            <Slider value={0.5} thumbStyle={{backgroundColor: '#F1C40F', width: 15, height: 15}} minimumTrackTintColor='#F1C40F' />
          </View>
          <View style={styles.career}>
            <Text style={styles.title}>Career</Text>
            <View style={styles.input}>
              <Input
                placeholder='Search for a carreer'
                leftIcon={
                  <Icon
                    name='search'
                    size={20}
                    color='#95A5A6'
                  />
                }
                inputContainerStyle={{
                  height: 30
                }}
                inputStyle={{
                  color: '#34495E'
                }}
                leftIconContainerStyle={{
                  paddingRight: 10
                }}
              />
            </View>
          </View>
          <View style={styles.career}>
            <Text style={styles.title}>Skills</Text>
            <View style={styles.input}>
              <Input
                placeholder='Search for a skill'
                leftIcon={
                  <Icon
                    name='search'
                    size={20}
                    color='#95A5A6'
                  />
                }
                inputContainerStyle={{
                  height: 30
                }}
                inputStyle={{
                  color: '#34495E'
                }}
                leftIconContainerStyle={{
                  paddingRight: 10
                }}
              />
            </View>
          </View>
          <View style={styles.distanceContainer}>
            <View style={styles.distance}>
              <Text style={styles.title}>Compensation</Text>
              <Text style={[styles.title, {marginLeft: 'auto'}]} >$ 40 - 200/hour</Text>
            </View>
            <Slider value={0.5} thumbStyle={{backgroundColor: '#F1C40F', width: 15, height: 15}} minimumTrackTintColor='#F1C40F' />
          </View>
          <View>
            <View style={styles.listCheck}>
              <Text style={styles.title}>Experience</Text>
              <View style={styles.listCheckItems}>
                <CheckItem title="Entry Level" />
                <CheckItem title="Beginner" />
                <CheckItem title="Intermediate" />
                <CheckItem title="Advanced" />
              </View>
            </View>
          </View>
          <View>
            <View style={styles.listCheck}>
              <Text style={styles.title}>Job Type</Text>
              <View style={styles.listCheckItems}>
                <CheckItem title="Full Time" />
                <CheckItem title="Part Time" />
                <CheckItem title="Other" />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title="Apply Filters"
              buttonStyle={{
                backgroundColor: '#F1C40F',
                borderRadius: 50,
              }}
              onPress={this.onApplyFilters}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

class CheckItem extends React.Component {
  state = {
    checked: true
  }
  render(){
    return(
      <CheckBox
        title={this.props.title}
        checked={this.state.checked}
        iconType='antdesign'
        checkedIcon='checksquare'
        checkedColor='#F1C40F'
        uncheckedIcon='checksquareo'
        containerStyle={{
          backgroundColor: 'white',
          borderColor: 'white',
          marginTop: 5,
          height: 20
        }}
        onPress={() => this.setState({checked: !this.state.checked})}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '170%',
    marginTop: '5%',
    marginLeft: '7%',
    marginRight: '7%',
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#34495E'
  },
  distance: {
    flexDirection: 'row',
    marginBottom: '8%'
  },
  distanceContainer: {
    marginTop: '10%',
    marginBottom: '5%',
  },
  title: {
    fontSize: 16,
    color: '#34495E'
  },
  career: {
    marginBottom: '10%'
  },
  listCheck: {
    marginBottom: '10%'
  },
  listCheckItems: {
    flexDirection: 'column',
    width: '60%',
    marginTop: '5%'
  },
  input: {
    marginTop: '8%'
  },
  buttonContainer: {

  }
});
