import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export class Home extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.h1}>HomePage</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCC',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8
    },
    h1: {
      fontSize: 20
    },
    input: {
      backgroundColor: "white",
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: "black",
      margin: 8,
      padding: 4,
      width: '100%'
    }
  });