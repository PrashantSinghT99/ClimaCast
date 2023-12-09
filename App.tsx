import React from 'react';
import CurrentWeather from './src/Components/CurrentWeather';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
