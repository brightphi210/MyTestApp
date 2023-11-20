import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';


const Stack = createNativeStackNavigator();


const App = () => {



  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ title: 'Home', headerShown: false}}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{ title: 'Register', headerShown: true }}/>
        <Stack.Screen name='dashboard' component={Dashboard} options={{ title: 'Register', headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;