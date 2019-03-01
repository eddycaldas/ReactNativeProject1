
import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.textStyle}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          placeholder="Add name, phone number, skills"
          />
         <Button title="Add"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    width: 300
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  }
});
