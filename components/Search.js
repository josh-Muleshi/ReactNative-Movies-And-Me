import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

class Search extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <View style={{ flex: 1, backgroundColor: 'red'}}></View>
                <View style={{ flex: 1, backgroundColor: 'green'}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      borderColor: 'gray'
    }
  })

export default Search