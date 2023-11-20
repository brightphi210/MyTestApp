import React from 'react'
import {SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import Icon from 'react-native-vector-icons/FontAwesome';


const customFonts ={
    'Kanit': require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit2': require('../assets/fonts/Kanit-Regular.ttf'),
    'pacific': require('../assets/fonts/Pacifico-Regular.ttf')
  };


const SignUp = ({navigation}) => {

    const [fontsLoaded] = useFonts(customFonts);

    // if (!fontsLoaded) {
    //   return <AppLoading />;
    // }
    
  return (

    
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>

    <ScrollView>
        <View style={{flex: 1,  paddingHorizontal: 20, marginTop: 50}}>

            <Image 
                source={require('../assets/Images/logo.png')}
                style={{width: 70, height: 70}}
            />

            <View style={{alignItems: 'left'}}>
                <Text style={{fontSize: 30, fontFamily: 'Kanit2'}}>Welcome to Foodiee</Text>
                <Text style={{fontSize: 18, fontFamily: 'Kanit2', color: '#A0A0A0'}}>Home of all food adventures</Text>
            </View>
            <View style={{paddingVertical: 30,}}>
            <TextInput
                    placeholder='Full Name'
                    style={{
                        width: '100%',
                        borderColor: '#D6D6D6',
                        borderWidth: 1,
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10
                    }}
                />


                <TextInput
                    placeholder='Email address'
                    style={{
                        width: '100%',
                        borderColor: '#D6D6D6',
                        borderWidth: 1,
                        padding: 10,
                        marginTop: 10,
                        borderRadius: 10
                    }}
                />

                <View style ={{position: 'relative'}}>
                    <TextInput
                        placeholder='Password'
                        style={{
                            width: '100%',
                            borderColor: '#D6D6D6',
                            borderWidth: 1,
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10
                        }}
                        
                    />

                    <TouchableOpacity style={{ position: 'absolute', right: 30, top: 27, fontSize: 15 }}>
                        <Icon name='eye' />
                    </TouchableOpacity>
                </View>

                <View style={{position: 'relative'}}>
                    <TextInput
                        placeholder='Confirm Password'
                        style={{
                            width: '100%',
                            borderColor: '#D6D6D6',
                            borderWidth: 1,
                            padding: 10,
                            marginTop: 10,
                            borderRadius: 10
                        }}
                    />

                    <TouchableOpacity style={{ position: 'absolute', right: 30, top: 27, fontSize: 15 }}>
                        <Icon name='eye' />
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{fontFamily: 'Kanit2', color: '#FA4A0C'}}>Forgot passcode?</Text>
            <TouchableOpacity style={{
                backgroundColor: '#EC2623', 
                alignSelf: 'center', marginBottom: 10, 
                borderRadius: 10, 
                marginTop: 30,
                width: '100%',
                }}>
                <Text style={{
                    paddingHorizontal: 50, 
                    paddingVertical: 10, 
                    color: 'white', fontSize: 15, 
                    fontFamily: 'Kanit2',
                    textAlign: 'center', 
                }} 
                onPress={()=>navigation.navigate('Login')}>Join</Text>
            </TouchableOpacity>
            <Text style={{
                fontFamily: 'Kanit2', 
                color: '#999999', 
                textAlign: 'center'
            }}>Already have an account ? <Text style={{color: '#FA4A0C'}} onPress={()=>navigation.navigate('Login')}>Login</Text></Text>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp