import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
// import Description from './screens/Description';
import Description from './screens/Description';

const Stack = createNativeStackNavigator();


const App = () => {



  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='description' component={Description}/>
        <Stack.Screen name='dashboard' component={Dashboard} options={{ title: 'Dashboard', headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;