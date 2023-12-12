import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RowText from '../Components/RowText';
import { weatherType } from '../Utility/weatherType';
const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0]?.main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text style={tempStyles}>{temp}°</Text>
        <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
        <RowText
          messageOne={`High : ${temp_max}° `}
          messageTwo={` Low : ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}></RowText>
      </View>
      <RowText
        messageOne={weather[0]?.description.toUpperCase()}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}></RowText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'white',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'white',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'white',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: { fontSize: 43 , color:"white"},
  message: { fontSize: 25, color:"#DC143C", },
});

export default CurrentWeather;
