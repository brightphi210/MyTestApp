import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { supabase } from './auth';


const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })


        if (error) {
            console.error(error.message);
          } else {
            console.log('User logged in:', user);
            navigation.navigate('dashboard')
          }

        }

    return (

    
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white',}}>
    
        <ScrollView>
            <View style={{flex: 1,  paddingHorizontal: 20, marginTop: 80}}>
    
                <View style={{alignItems: 'left'}}>
                    <Text style={{fontSize: 30}}>Login to TodoApp</Text>
                    <Text style={{fontSize: 18, color: '#A0A0A0'}}>Welcome to TodoApp please login</Text>
                </View>
                <View style={{paddingVertical: 30,}}>
    
    
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

                        onChangeText={(text) => setEmail(text)}
                        value={email}
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

                            onChangeText={(text) => setPassword(text)}
                            value={password}
                        />
    
                        <TouchableOpacity style={{ position: 'absolute', right: 30, top: 27, fontSize: 15 }}>
                            <Icon name='eye' />
                        </TouchableOpacity>
                    </View>
    
                </View>
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
                    onPress={()=>navigation.navigate('dashboard')} >Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
      )
}

export default Login