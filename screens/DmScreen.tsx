import { View, Text, ScrollView, Dimensions, StyleSheet, Pressable, ViewStyle, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Logo from '../components/microComponent/Logo'
import Button from '../constants/Button';
import Colors from '../constants/Colors';
import DMessages from '../components/DMessages';

const BORDER_RADIUS = 30;

const DmScreen = ({navigation, route}) => {
    const [textInputValue, onChangeTextInput] = useState('');
    const [mockMessageState, onMessageChange] = useState(mockMessages);
    const reversedColors = [...Colors.gradientColors].reverse();
    const user = route.params.user;
    const headerUser = (
                <View style={styles.singleUserContainer}>
                <View>
                    <Image style={styles.userAvatar} source={{uri: user.avatarUri}} />
                    </View>
                <View style={styles.singleUserInfoContainer}>
                    <Text style={styles.singleUserName}>{user.name}</Text>
                    <Text style={styles.singleUserLastMessage}>{user.university}</Text>
                    </View>
            </View>
    )

  return (
    <LinearGradient style={styles.linearContainer} colors={reversedColors}>
    <Logo />
    <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
            <Pressable style={styles.backArrow} onPress={() => navigation.navigate('DMList')} >
                <Image source={require('../assets/images/icons/arrow.png')} />
            </Pressable>
            {headerUser}
        </View>
            <DMessages messages={mockMessageState}/>
            <View style={styles.textInputContainer}>
                <TextInput 
                multiline 
                style={styles.textInput}
                onChangeText={text => onChangeTextInput(text)}
                value={textInputValue}/>
                <View style={styles.textInputButton}>
                <Pressable onPress={() => {
                    onMessageChange([...mockMessageState, {side: 1, date: 'just now', message: textInputValue}])
                    onChangeTextInput('')
                    }}>
                    <Image source={require('../assets/images/icons/chatBubble.png')} />
                </Pressable>
                </View>
            </View>
    </View>
</LinearGradient>
  )
}
const mockMessages = [
    {
        side: 0,
        date: '1 day ago',
        message: 'Selam, ders notu var mi?',
    },
    {
        side: 1,
        date: '5 minutes ago',
        message: 'Hangi ders?',
    },
    {
        side: 0,
        date: '4 minutes ago',
        message: 'CE356',
    },
    {
        side: 1,
        date: '3 minutes ago',
        message: 'Var amfideyim gel vereyim.',
    },
    {
        side: 0,
        date: '1 day ago',
        message: 'Tamam geliyorum',
    },
    {
        side: 0,
        date: '1 day ago',
        message: 'Geldim neredesin',
    },
    {
        side: 1,
        date: '1 day ago',
        message: 'Arka Bahceye gectik',
    },
    {
        side: 0,
        date: '1 day ago',
        message: 'CE356 teslimi ne zamandı?',
    },
    {
        side: 1,
        date: '1 day ago',
        message: 'Yarın',
    },


];



const styles = StyleSheet.create({
    linearContainer: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: Logo.getMargin() + 30,
        borderRadius: BORDER_RADIUS,
    },
    userAvatar: {
        width: Button.avatar.containerRadius / 3 * 2,
        height: Button.avatar.containerRadius / 3 * 2,
        borderRadius: Button.avatar.containerRadius / 3 * 2,
    },
    singleUserContainer: {
        flexDirection: 'row',
        paddingVertical: 10,

    },
    singleUserInfoContainer: {
        display: 'flex',
        marginLeft: 15,
        justifyContent: 'space-evenly',
    },
    singleUserName: {
        fontFamily: 'semibold',
        fontSize: 20,
    },
    singleUserLastMessage: {
        fontFamily: 'light',
        fontSize: 13,
        color: Colors.fadeTextGrey,

    },
    headerContainer: {
        position: 'relative',
        alignItems: 'center',
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 2,
    },
    backArrow: {
        position: 'absolute',
        left: 20,
        top: 20
    },
    textInputContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginBottom: 20,
        borderRadius: 20,
        paddingLeft: 20,
        backgroundColor: '#BABABA',
        height: 50,
    },
    textInput: {
        height: 50,
        flexGrow: 1,
        width: 20
    },
    textInputButton: {
        borderBottomEndRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#373E4E',
        alignSelf: 'flex-start',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default DmScreen

