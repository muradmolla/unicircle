import { Image, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import QuarterCircleButton from '../components/menu/BottomNavigator'
import Colors from '../constants/Colors';
import BottomNavigator from '../components/menu/BottomNavigator';
import UserScroller from '../components/UserScroller';

const SwiperScreen = () => {
    const img: Image = require('../assets/images/splash.png')
  return (
    <View style={styles.container}>
        <UserScroller />
        <View style={styles.navigator}>
            <BottomNavigator />
        </View>
      
    </View>
  )
}

export default SwiperScreen

interface IStyles {
    container: ViewStyle,
    navigator: ViewStyle,
    scoller: ViewStyle,

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        //TODO: handle header space
        
    },
    navigator: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
    scroller: {
        flex: 1,
    }
})