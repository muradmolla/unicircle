import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Interest from './Interest'

const TestInterests = [
    {
        name: 'Snowboard',
        key: 0,
    },
    {
        name: 'Billboard',
        key: 2,
    },
    {
        name: 'Guitar',
        key: 3,
    },
    {
        name: 'Piano',
        key: 4,
    },
    {
        name: 'Painting',
        key: 5,
    },
    {
        name: 'Freediving',
        key: 6,
    },
    {
        name: 'Dancing',
        key: 7,
    },
    {
        name: 'Kareoke',
        key: 8,
    },
    {
        name: 'Films',
        key: 9,
    },

]

export default function InterestsContainer() {
    const interests = TestInterests.map((v) => {
        return <Interest name={v.name} />;
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