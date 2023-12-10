import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { weatherType } from '../Utility/weatherType';
const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;
  return (
    <View style={item}>
      <Icon name={weatherType[condition].icon} size={50} color="black" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{`${Math.round(min)} / ${Math.round(max)}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'orange',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});

export default ListItem;
