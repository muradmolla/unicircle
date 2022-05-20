import { Image, StyleSheet, View, ImageURISource, Pressable, ImageStyle } from 'react-native'
import React, { EventHandler } from 'react'
import { ViewStyle } from 'react-native'
import Button from '../../constants/Button'

const { containerRadius } = Button.avatar;

export default function AvatarButton(props: {
    img: ImageURISource,
    onPress?: EventHandler<any>,
}) {
  return (
    <Pressable onPress={props.onPress}>
        <View style={styles.container}>
            <Image source={props.img} />
        </View>
    </Pressable>
  )
}

interface IStyles {
    container: ViewStyle,
    img: ImageStyle,
}

const styles = StyleSheet.create<IStyles>({
    container: {
        opacity: 0.9,
        backgroundColor: "#c0c0c0",
        width: containerRadius,
        height: containerRadius,
        borderRadius: containerRadius / 2,
        overflow: 'hidden',
        borderWidth: 5,

    },
    img: {
        resizeMode: 'cover',
        width: containerRadius,
        height: containerRadius,
    }

})