import { Image, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../constants/Colors';
import BottomNavigator from '../components/menu/BottomNavigator';
import UserScroller from '../components/UserScroller';
import Logo from '../components/microComponent/Logo';
import EndpointAPI from '../methods/EndpointAPI';
import { Swipee } from '../types';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

//TODO: FONT!!

const SwiperScreen = ({navigation}) => {
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
        <BottomNavigator avatarFn={() => navigation.navigate('DMList')} leftFn={swipeLeft} rightFn={swipeRight}/>
    </View>
  )
}

export default SwiperScreen

interface IStyles {
    container: ViewStyle,
    scroller: ViewStyle,

}

const styles = StyleSheet.create<IStyles>({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    scroller: {
        flex: 1,
    }
})