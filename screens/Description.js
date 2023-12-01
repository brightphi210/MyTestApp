import React from 'react'
import DashHeader from '../Components/DashHeader'

import { SafeAreaView, Text, View } from 'react-native-safe-area-context'

const Description = ({route}) => {
    const { todo } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', height: '100%'}}>
        <DashHeader />

        <View>
            <Text>Title: {todo}</Text>
        </View>
    </SafeAreaView>
  )
}

export default Description