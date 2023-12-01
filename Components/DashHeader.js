// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={{
        height: 130,
        backgroundColor: 'white',
        alignItems: 'left',
        paddingTop: 80,
        paddingHorizontal: 25,
        flexDirection: 'row',
        gap: 200
    }}>
      <TouchableOpacity style={{}}>
        <Text>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Login')}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};


export default CustomHeader;
