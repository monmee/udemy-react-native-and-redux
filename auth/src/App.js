import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDDirUnQsakRdxmgfWfMWEZl0tOjCBp5fE',
      authDomain: 'authentication-2be60.firebaseapp.com',
      databaseURL: 'https://authentication-2be60.firebaseio.com',
      projectId: 'authentication-2be60',
      storageBucket: 'authentication-2be60.appspot.com',
      messagingSenderId: '971662870594'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
