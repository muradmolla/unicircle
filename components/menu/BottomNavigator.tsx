import { Image, StyleSheet, Text, View } from 'react-native'
import React, { EventHandler } from 'react'
import QuarterCircleButton from './QuarterCircleButton'
import Colors from '../../constants/Colors';
import AvatarButton from './AvatarButton';

interface IProps {
  leftFn: EventHandler<any>,
  rightFn: EventHandler<any>,
  avatarFn: EventHandler<any>,
}
// TODO: Avatar should get data from a data store.
export default function BottomSwiper(props: IProps) {
  return (
    <View style={styles.container}>
            <QuarterCircleButton 
        color={Colors.red}
        isRight={true}
        ico={require('../../assets/images/icons/X.png')}
        onPress={props.leftFn}
      />
      <AvatarButton onPress={props.avatarFn} img={{uri: 'https://i.ibb.co/YdvkzLq/70627842-2106717996303349-4474052554216405264-n.jpg', width: 100, height: 100}}/>
      <QuarterCircleButton 
        color={Colors.green}
        isRight={false}
        ico={require('../../assets/images/icons/heart.png')}
        onPress={props.rightFn}
      />
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flexDirection:'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999,
        position: 'absolute',
        width: '100%',
        bottom: 0,
    },
})