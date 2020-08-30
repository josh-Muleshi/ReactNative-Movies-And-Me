import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

class Search extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: 50, width: 50, backgroundColor: 'red'}}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'green'}}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'blue'}}></View>
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