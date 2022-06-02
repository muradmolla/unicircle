import { View, Text, Image, ImageStyle, StyleSheet, Dimensions, ViewStyle, TouchableHighlight, Pressable } from 'react-native'
import {useState} from 'react'
import React from 'react'
import Button from '../constants/Button';

interface IProps {
    images: IMG[]
}

export default function PhotoViewer(props: IProps) {
    const [transition, setTransition] = useState(0);
    const extraStyle = {left: -transition*Dimensions.get('window').width};
    const translate = (transition: number, direction: ETransationDirection, galleryLength: number) => {
        setTransition(Math.abs((transition + direction) % galleryLength + galleryLength ) % galleryLength )
    };
  return (
    <View style={styles.container}>
            <View style={[styles.translator, extraStyle]} >
                {imageMapper(props.images, transition)}
            </View>
        <View style={styles.dotContainer}>
            {dots(props.images.length, transition)}
        </View>
        <TouchableHighlight delayPressIn={0} onPressIn={() => translate(transition, ETransationDirection.left, props.images.length)}>
            <View style={[styles.touchableLeft, styles.touchables]}/>
        </TouchableHighlight>
        <TouchableHighlight delayPressIn={0} onPressIn={() => translate(transition, ETransationDirection.right, props.images.length)}>
            <View style={[styles.touchableRight, styles.touchables]}/>
        </TouchableHighlight>
    </View>
  )
}


const dots = (length: number, index: number) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(<View key={i} style={[styles.dot, {opacity: i === index ? 1 : 0.2}]}/>)
    }
    return arr.map(v=>v);
}

enum ETransationDirection {
    left = -1,
    right = 1
}



const imageMapper = (imgArray: IMG[], transition: number) => {
    const img = imgArray[transition]
    return imgArray.map((img: IMG) => 
            <Image key={img.key} style={styles.image} source={{uri: img.uri}} />
    );
}

export type IMG = {
    uri: string,
    key: number
}

interface IStyles {
    image: ImageStyle,
    translator: ViewStyle,
    container: ViewStyle,
    touchableLeft: ViewStyle,
    touchableRight: ViewStyle,
    touchables: ViewStyle,
    dotContainer: ViewStyle,
    dot: ViewStyle,
}

const styles = StyleSheet.create<IStyles>({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    translator: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
    },
    touchableLeft: {
        left: 0
    },
    touchableRight: {
        right: 0
    },
    touchables: {
        position: 'absolute',
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height - Button.circular.radius,
        opacity: 0.4
    },
    dotContainer: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        right: 10,
        top: 60,
    },
    dot: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        margin: 2,
        borderWidth: 1,
        borderColor: '#818181',
    }
});