import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import Colors from '../../constants/Colors'

export default function Interest(props: {
    name: string,
}) {
  return (
    <LinearGradient style={styles.container} colors={Colors.gradientColors}>
      <Text style={styles.text}>{ props.name }</Text>
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 3,
    },
    text: {
        color: '#fff'
    }

})