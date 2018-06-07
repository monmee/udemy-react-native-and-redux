// Import libraries to help create a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Make a component
const Header = (props) => {
  const { container, item } = styles;

  return (
    <View style={container}>
      <Text style={item}>{props.headerText}</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  item: {
    fontSize: 20
  }
});

// Make the component available to other parts of the app
export { Header };
