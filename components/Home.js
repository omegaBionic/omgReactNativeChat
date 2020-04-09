import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
export class Home extends React.Component {

  state = {
    user: '',
    room: ''
  }

  handleUserChange = user => {
    this.setState({ user });
  }
  handleRoomChange = room => {
    this.setState({ room });
  }
  handleChatPress = e => {
    const { user, room } = this.state;
    Actions.chat({ user }, { room, title: `salon ${room} ` });
  }

  render() {
    const { user, room } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Rentrez votre pseudo</Text>

        <TextInput style={styles.input}
          value={user}
          placeholder="Pseudo"
          onChangeText={this.handleUserChange}
        />

        <Text style={styles.h1}>Indiquez le nom du salon de discution</Text>

        <TextInput style={styles.input}
          value={room}
          placeholder="salon"
          onChangeText={this.handleRoomChange}
        />

        <Button style={styles.button}
          title="commencez !"
          onPress={this.handleChatPress} // permet d'afficher la page suivante et d'envoyer la valeur user
          color="#F0F"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h1: {
    color: 'blue',
    fontSize: 20
  },

  input: {
    backgroundColor: "#F0F",
    borderColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 8,
    padding: 3,
    width: '100%',

  }
});