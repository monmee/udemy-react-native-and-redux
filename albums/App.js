/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import libraries to help create a component
import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

type Props = {};

// Create a component(class based component)
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header name={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
