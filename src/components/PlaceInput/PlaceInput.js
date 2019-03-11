import React, {Component} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

class PlaceList extends Component {
    state = {
        placeName: ''
      }
    
      placeNameChangeHandler = (event) => {
        this.setState({
          placeName: event
        })
      }

      placeSubmitHandler = () => {
        if(this.state.placeName.trim() === ''){
          return;
        }
            this.props.onPlaceAdded(this.state.placeName)
        }
        
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                    placeholder="Add name, phone number, skills"/>
                <Button 
                    style={styles.placeButton}
                    title="Add"
                    onPress={this.placeSubmitHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        //flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
      },
      placeInput: {
        width: '70%'
      },
      placeButton: {
        width: '30%'
      }
})

export default PlaceList;