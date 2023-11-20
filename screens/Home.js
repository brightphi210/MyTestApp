import React from 'react'
import {SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';


const customFonts ={
  'Kanita': require('../assets/fonts/Kanit-LightItalic.ttf'),
  'pacific': require('../assets/fonts/Pacifico-Regular.ttf')
};
const Home = ({navigation }) => {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
      <ImageBackground source={require('../assets/Images/bg.png')} style={{flex: 1}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
        <Image 
          source={require('../assets/Images/logo.png')}
          style={{width: 80, height: 80}}
        />

        <View style={{}}>
        <Text style={{color: "black", fontFamily: 'pacific', fontSize: 70, marginTop: -30, marginBottom: -25, textAlign: 'center'}}>Foodiee</Text>
        <Text style={{color: "black", fontFamily: 'Kanita', fontSize: 26, paddingTop: 0, marginBottom: -10, textAlign: 'center'}}>food for everyone</Text>
        </View>
      </View>

      <View style={{paddingHorizontal: 30}}>
      <TouchableOpacity style={{backgroundColor: '#EC2623', alignSelf: 'center', marginBottom: 100, borderRadius: 10, width: '100%'}}>
          <Text style={{paddingHorizontal: 50, paddingVertical: 12, color: 'white', fontSize: 15, fontFamily: 'Kanit', textAlign: 'center'}} 
          onPress={()=>navigation.navigate('SignUp')}>Get started</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>

  )
}

export default Home