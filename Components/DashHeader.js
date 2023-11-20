// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const CustomHeader = ({ title }) => {
  return (
    <View style={{
        height: 130,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'left',
        paddingTop: 80,
        paddingHorizontal: 25,
        flexDirection: 'row',
        gap: 250
    }}>
      <TouchableOpacity style={{}}>
        <Icon name='bars' style={{fontSize: 20, color: '#818080',}}/>
      </TouchableOpacity>

      <TouchableOpacity style={{}}>
        <Icon name='cart-plus' style={{fontSize: 20, color: '#818080'}}/>
      </TouchableOpacity>

    </View>
  );
};


export default CustomHeader;
