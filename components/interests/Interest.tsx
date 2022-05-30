import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import Colors from '../../constants/Colors'

//TODO: FONT!!

export default function Interest(props: {
    name: string,
}) {
  return (
    <LinearGradient style={styles.container} colors={Colors.gradientColors} locations={[0, 0.7]} start={{x: 0, y: 0}} end={{x: 1, y: 0.2}}>
      <Text style={styles.text}>{ props.name }</Text>
    </LinearGradient>
  )
}



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 12,
        marginBottom: 12,
        borderRadius: 10,
        weight: 500,
    },
    text: {
        color: '#fff'
    }

})