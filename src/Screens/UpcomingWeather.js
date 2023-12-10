import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListItem from '../Components/ListItem';
// const DATA = [
//   {
//     dt_txt: '2023-12-09',
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55,
//     },
//     weather: [
//       {
//         main: 'Clear',
//       },
//     ],
//   },
//   {
//     dt_txt: '2023-12-10',
//     main: {
//       temp_max: 12.2,
//       temp_min: 9.8,
//     },
//     weather: [
//       {
//         main: 'Cloudy',
//       },
//     ],
//   },
//   {
//     dt_txt: '2023-12-11',
//     main: {
//       temp_max: 15.5,
//       temp_min: 11.2,
//     },
//     weather: [
//       {
//         main: 'Rain',
//       },
//     ],
//   },
//   {
//     dt_txt: '2023-12-12',
//     main: {
//       temp_max: 6.7,
//       temp_min: 4.3,
//     },
//     weather: [
//       {
//         main: 'Snow',
//       },
//     ],
//   },
// ];

const UpcomingWeather = ({weatherData}) => {
  const renderItem = ({item}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
const {container,image}=styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        style={image}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
