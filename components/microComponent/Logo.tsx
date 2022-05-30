import { StyleSheet, View, Image, StatusBar } from 'react-native'
import React from 'react'

const logoScale = 0.35;
const logoDimensions = [277, 60];
const logoScaledDimensions = [logoDimensions[0] * logoScale, logoDimensions[1] * logoScale];

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image style={styles.img} source={require('../../assets/images/logo.png')} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        position: 'absolute',
        left: '50%',
        top: StatusBar.currentHeight,
        zIndex: 2,
        elevation: 2,
        transform: [{translateX: -1 * (logoScaledDimensions[0]) / 2}]
    },
    img: {
        width: logoScaledDimensions[0],
        height: logoScaledDimensions[1],
        resizeMode: 'contain'

    }
})