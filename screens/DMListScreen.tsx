import { View, Text, ViewStyle, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import  {LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors'
import Logo from '../components/microComponent/Logo'
import Button from '../constants/Button'
import BottomNavigator from '../components/menu/BottomNavigator';
import DMList from '../components/DMList'

const BORDER_RADIUS = 30;

const DMListScreen = ({navigation}) => {
  const reversedColors = [...Colors.gradientColors].reverse();
    return (
        <LinearGradient style={styles.linearContainer} colors={reversedColors}>
            <Logo />
            <View style={styles.contentContainer}>
                <ScrollView style={styles.scrollerContainer}>
                    <DMList navigation={navigation}/>
                </ScrollView>
            </View>
            <BottomNavigator navigationType='DM' avatarFn={() => navigation.navigate('Swiper')} leftFn={() => console.log('avatar')} rightFn={() => console.log('avatar')}/>
        </LinearGradient>
  )
}

interface IStyle {
    linearContainer: ViewStyle,
    contentContainer: ViewStyle,
    scrollerContainer: ViewStyle,
}

const styles = StyleSheet.create<IStyle>({
    linearContainer: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Logo.getMargin() + 30,
        marginBottom: Button.circular.radius + 8,
        borderRadius: BORDER_RADIUS,
    },
    scrollerContainer: {
        margin: BORDER_RADIUS / 2,

    }
});

export default DMListScreen