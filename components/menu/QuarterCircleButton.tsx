import { ColorValue, Image, ImageProps, ImageStyle, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Component, EventHandler } from 'react'
import Button from '../../constants/Button';


const circleRadius = Button.circular.radius;

export default function QuarterCircleButton(props: {
    ico: ImageProps,
    color: ColorValue,
    isRight?: boolean,
    onPress: EventHandler<any>
}) {

    //Merge prop related styles with static styles. 
    const propStyles : ViewStyle = {
        backgroundColor: props.color,
    };

    const icoStyles: ViewStyle = {
      marginLeft: circleRadius / 7,
    }

    if (props.isRight) {
        propStyles['right'] = circleRadius;
        icoStyles['right'] = 0;
        icoStyles.marginRight = circleRadius / 7;
    }


    return (
      <View style={styles.container}>
          <Pressable onPress={props.onPress}> 
          <View style={[styles.circle, propStyles]}>
              <View style={[styles.icoContainer, icoStyles]} >
              <Image style={styles.ico} source={props.ico} resizeMode={'contain'}/>
              </View>
              
          </View>
          </Pressable>
      </View>
    )
  }

  interface IStyles {
      container: ViewStyle,
      circle: ViewStyle,
      ico: ImageStyle,
      icoContainer: ViewStyle,
  }

  const styles = StyleSheet.create<IStyles>({
      container: {
        width: circleRadius,
        height: circleRadius,
        overflow: "hidden",
      },
      circle: {
        width: circleRadius * 2,
        height: circleRadius * 2,
        borderRadius: circleRadius,
      },
      ico: {
          width: circleRadius / 3,
          height: circleRadius / 3,
          marginTop: circleRadius / 10,

      },
      icoContainer: {
        position: 'absolute',
        width: circleRadius,
        height: circleRadius,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
  })