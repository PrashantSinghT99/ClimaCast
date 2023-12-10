import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Components/Tabs';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useGetWeather} from './src/Hooks/useGetWeather';
const App = () => {
  const {weather, loading, error} = useGetWeather();
  //console.log(weather, loading, error);
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
