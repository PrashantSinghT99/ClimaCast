import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {create} from 'react-test-renderer';

const ListItem = props => {
  const {dt_txt, min, max, condition} = props;
  const {item,date,temp}=styles;
  return (
    <View style={item}>
      <Icon name="sun-o" size={50} color="black" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
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
