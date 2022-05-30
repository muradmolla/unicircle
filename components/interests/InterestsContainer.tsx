import { StyleSheet, View } from 'react-native'
import React from 'react'
import Interest from './Interest'
import { Interest as InterestType } from '../../types'

interface IProps {
    interests: InterestType[]
}

export default function InterestsContainer(props: IProps) {
    const interests = props.interests.map((v) => {
        return <Interest name={v.name} key={v.id} />;
    });
  return (
    <View style={styles.container}>
        {interests}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})