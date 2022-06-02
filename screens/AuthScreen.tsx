import { View, Text } from 'react-native'
import React from 'react'
import Login from '../components/auth/Login'

const AuthScreen = ({navigation}) => {
  return (
    <View>
      <Login navigation={navigation}/>
    </View>
  )
}

export default AuthScreen