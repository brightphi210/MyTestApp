import React from 'react'
import {SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import DashHeader from '../Components/DashHeader'
import {useFonts} from 'expo-font'
import Icon from 'react-native-vector-icons/FontAwesome';


const customFonts ={
    'Kanit': require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit2': require('../assets/fonts/Kanit-Regular.ttf'),
    'pacific': require('../assets/fonts/Pacifico-Regular.ttf')
  };


const Dashboard = () => {

    const [fontsLoaded] = useFonts(customFonts);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
      <View style={{backgroundColor: 'white'}}>
        <DashHeader title={'Dashboard'} />
        <View style={{paddingHorizontal: 30, paddingTop: 10}}>
            <Text style={{fontSize: 30, }}>Delicious </Text>
            <Text style={{fontSize: 30, }}>food for you</Text>

            <View style={{position: 'relative'}}>
                <Icon name='search' style={{position: 'absolute', bottom: 10, left: 0, zIndex: 2, fontSize: 15}}/>
                <TextInput
                    placeholder='Search'
                    style={{
                        width: '100%',
                        borderColor: '#D6D6D6',
                        borderWidth: 1,
                        paddingVertical: 5,
                        paddingHorizontal: 20,
                        marginTop: 10,
                        borderRadius: 10,
                        backgroundColor: '#F4F4F4'
                    }}
                />
            </View>
        </View>
    </View>
    </SafeAreaView>

  )
}

export default Dashboard