import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'

interface IProps {
    side: boolean | number,
    date: string,
    message: string,
}

const DMessage = (props: IProps) => {
    const extraStylesView: ViewStyle = props.side == 1 ? {
        alignSelf: 'flex-end',
        backgroundColor: '#D8D7DC',
    } : {};
    const extraStylesText: ViewStyle = props.side == 1 ? {
        alignSelf: 'flex-end',
    } : {};
  return (
      <>
    <View style={[styles.container, extraStylesView]}>
      <Text>{props.message}</Text>
    </View>
    <Text style={[styles.dateText, extraStylesText]}>{props.date}</Text>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#ADAAB8',
        margin: 5,
    },
    dateText: {
        marginHorizontal: 20,
        color: '#8F8F8F',
        fontSize: 13,
    }
})

export default DMessage