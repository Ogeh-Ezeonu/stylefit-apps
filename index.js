// I'm pasting all my iOS codes here

// Importing library to help create a component
import React from 'react';
import { StyleSheet, Text, View, TextInput, AppRegistry } from 'react-native';


//Craete a component
const App = () => {
    return (
        <Text>Some Text</Text>
    );
};

//Render it to a device
AppRegistry.registerComponent('stylefit-apps', () => App);
