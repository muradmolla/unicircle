import { Image, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constants/Colors';
import BottomNavigator from '../components/menu/BottomNavigator';
import UserScroller from '../components/UserScroller';
import Logo from '../components/microComponent/Logo';
import EndpointAPI from '../methods/EndpointAPI';
import { Swipee } from '../types';

//TODO: FONT!!



const SwiperScreen = () => {
    const [swipee, setSwipee] = useState<null | Swipee>(null)
    const [nextswipee, setNextSwipee] = useState<null | Swipee>(null)


    const getSwipee = async () => {
        const response = await EndpointAPI.swiper.next()
        setSwipee(response);
    }
    const swipeLeft = async (accepted: boolean) => {
        return () => {
            getSwipee();
        }
    }
    const swipeRight = async () => {
        getSwipee();
    }

    useEffect(()=> {
        getSwipee();
    }, [])

    return (
        <View style={styles.container}>
        <Logo />
        <UserScroller swipee={swipee}/>
        <View style={styles.navigator}>
            <BottomNavigator avatarFn={() => console.log('avatarClicked')} leftFn={swipeLeft} rightFn={swipeRight}/>
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