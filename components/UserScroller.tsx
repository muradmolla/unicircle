import { StyleSheet, Text, View, ScrollView, Image, Dimensions, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Button from '../constants/Button'
import {H2, P} from '../constants/Typography'
import InterestsContainer from './interests/InterestsContainer'
import PhotoViewer, {IMG} from './PhotoViewer'
import { Swipee } from '../types'


interface IProps {
    swipee: Swipee | null
}

export default function UserScroller(props: IProps) {
    const renderContent = props.swipee === null ? (<Text>You are at the end of the list</Text>) : renderSwipee(props.swipee);
  return (
    <ScrollView style={styles.scroller} contentContainerStyle={{paddingBottom: Button.circular.radius + 10}}>
        {renderContent}
    </ScrollView>
  )
}

const renderSwipee = (swipee: Swipee) => {
    return (
        <>
        <View style={{position: 'relative'}}>
        <PhotoViewer images={swipee.images} />
            <View style={styles.basicInfoContainer}>
                <Text style={[styles.basicInfoTexts, {fontSize: 18, textShadowColor: '#000', textShadowOffset: {width: 0, height:0}, textShadowRadius: 18}]}>{swipee.university}</Text>
                <Text style={[styles.basicInfoTexts, {fontFamily: 'extra-bold', fontSize: 32, textShadowColor: '#000', textShadowOffset: {width: 0, height:0}, textShadowRadius: 18}]}>{swipee.name}</Text>
                <Text style={[styles.basicInfoTexts, {fontFamily: 'extra-bold', fontSize: 32, textShadowColor: '#000', textShadowOffset: {width: 0, height:0}, textShadowRadius: 18}]}>{swipee.age}</Text>
            </View>
        </View>
            <View style={styles.infoContainer}>
                <View style={styles.backdrop}>
                    <Text style={H2}>About</Text>
                    <Text style={P}>{swipee.about}</Text>
                </View>
                <View style={styles.backdrop}>
                    <Text style={H2}>Interest</Text>
                    <InterestsContainer interests={swipee.interests}/>
                </View>
            </View>
            </>
    );
}
interface IStyle {
    scroller: ViewStyle,
    image: ImageStyle,
    infoContainer: ViewStyle,
    backdrop: ViewStyle,
    basicInfoContainer: ViewStyle,
    basicInfoTexts: TextStyle,
}

const styles = StyleSheet.create<IStyle>({
    scroller: {
        flex: 1,
        backgroundColor: Colors.lightBG,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    infoContainer: {
        padding: 20,
    },
    backdrop: {
        backgroundColor: Colors.backdrop,
        marginVertical: 12,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    basicInfoContainer: {
        position: 'absolute',
        bottom: Button.circular.radius + 20,
        right: 15,
    },
    basicInfoTexts: {
        color: "#fff",
    }
})