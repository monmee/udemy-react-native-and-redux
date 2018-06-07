import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBaLcNy6ul-om3XExOAhPD-wvnpiiB1nvA",
      authDomain: "manager-51d73.firebaseapp.com",
      databaseURL: "https://manager-51d73.firebaseio.com",
      projectId: "manager-51d73",
      storageBucket: "manager-51d73.appspot.com",
      messagingSenderId: "229640093977"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
