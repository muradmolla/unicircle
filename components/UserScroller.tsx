import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Button from '../constants/Button'
import {H2, P} from '../constants/Typography'
import InterestsContainer from './interests/InterestsContainer'

export default function UserScroller() {
  return (
    <ScrollView style={styles.scroller} contentContainerStyle={{paddingBottom: Button.circular.radius + 10}}>

            <Image style={styles.image} source={{uri: 'https://i.ibb.co/4WjMG59/196003154-856736181906060-6420268993758200799-n.jpg'}} />
            <View style={styles.infoContainer}>
                <Text style={H2}>About</Text>
                <Text style={P}>My name is Kerim Ceylan and I enjoy meeting new people and finding ways to help them have an uplifting experience. I really enjoy when i go to the snowboard.</Text>
                <Text style={H2}>Interest</Text>
                <InterestsContainer />
            </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroller: {
        flex: 1,
        backgroundColor: Colors.lightBG,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    infoContainer: {
        padding: 20,
    },
})