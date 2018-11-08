import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppStateProvider } from './AppState';

import WeatherCards from './containers/Weather.Cards'
import MetricToggle from './containers/MetricToggle'
import AddCity from './containers/AddCity'

export default class App extends React.Component {

  render() {
    return (
      <AppStateProvider>
        <View style={styles.container}>
          <WeatherCards />
          <MetricToggle />
          <AddCity />
        </View>
      </AppStateProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222'
  },
});
  