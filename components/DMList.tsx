import { View, Text, Image, StyleSheet, ViewStyle, ImageStyle, TextStyle, Pressable } from 'react-native'
import React from 'react'
import {DMUser} from '../types';
import Button from '../constants/Button';
import Colors from '../constants/Colors';

interface ISingleDM {
    dmUser: DMUser,
    message: string,
}

// TODO: navigation to DM

const renderDMList = (navigation, DMList: ISingleDM[]) => {
    return DMList.map((v, i)=> {
        const extraStyles: ViewStyle = i !== 0 ? {borderTopWidth: 1, borderColor: Colors.fadeBorderGrey} : {};
        return (
            <Pressable key={i} onPress={ () => navigation.navigate('DM', {user: v.dmUser})}>
                <View style={[styles.singleUserContainer, extraStyles]}>
                <View>
                    <Image style={styles.userAvatar} source={{uri: v.dmUser.avatarUri}} />
                    </View>
                <View style={styles.singleUserInfoContainer}>
                    <Text style={styles.singleUserName}>{v.dmUser.name}</Text>
                    <Text style={styles.singleUserLastMessage}>{v.message}</Text>
                    </View>
            </View>
        </Pressable>
        )
    })
}

const DMList = ({navigation}) => {
    const mockdata: ISingleDM[] = [
        {
            dmUser: {
                name: 'Kerim',
                age: 23,
                university: 'Kadir Has University',
                avatarUri: 'https://i.ibb.co/KzxMNLH/212658975-187435943339118-5695072243577673779-n.jpg',
            },
            message: 'Nabin',
        },
        {
            dmUser: {
                name: 'Mami',
                age: 22,
                university: 'Kadir Has University',
                avatarUri: 'https://instagram.fist11-1.fna.fbcdn.net/v/t51.2885-15/180677875_279232057166099_1045390209233399941_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fist11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=VhKP8elWAH8AX_rMXI2&tn=b9ds5Upo5P2TRiaA&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjU2NjQwMjUwMTYzMzc5NzU3Mw%3D%3D.2-ccb7-5&oh=00_AT8ct2A5c9WMpJWNIEfNv-pOSyMjsKxDqoHOBSmqwZPZ0A&oe=62A04A96&_nc_sid=30a2ef',
            },
            message: 'Iyi yapmissin',
        }
    ]
  return (
    <View>
      { renderDMList(navigation, mockdata) }
    </View>
  )
}

interface IStyles {
    userAvatar: ImageStyle,
    singleUserContainer: ViewStyle,
    singleUserInfoContainer: ViewStyle,
    singleUserName: TextStyle,
    singleUserLastMessage: TextStyle,
}

const styles = StyleSheet.create<IStyles>({
    userAvatar: {
        width: Button.avatar.containerRadius,
        height: Button.avatar.containerRadius,
        borderRadius: Button.avatar.containerRadius,
    },
    singleUserContainer: {
        flexDirection: 'row',
        paddingVertical: 10,

    },
    singleUserInfoContainer: {
        display: 'flex',
        marginLeft: 30,
        justifyContent: 'space-evenly',
    },
    singleUserName: {
        fontFamily: 'semibold',
        fontSize: 24,
    },
    singleUserLastMessage: {
        fontFamily: 'light',
        fontSize: 15,
        color: Colors.fadeTextGrey,

    }
})

export default DMList