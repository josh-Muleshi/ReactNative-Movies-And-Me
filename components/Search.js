import React from 'react';
import { View, Button, TextInput, Text } from 'react-native';

class Search extends React.Component {
    render() {
        return(
            <View>
                <Text >Bienvenu</Text>
                <TextInput placeholder="Titre du film" />
                <Button onPress={() => {}} title="Rechercher" />
            </View>
        )
    }
}

export default Search