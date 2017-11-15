/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import  MapScreenContainer  from './app/Containers/MapScreen/MapScreenContainer';



export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <MapScreenContainer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
