import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import DMessage from './microComponent/DMessage'

interface IProps {
    messages: any[]
}

const DMessages = (props: IProps) => {
    const scrollViewRef = useRef();
    const messages = props.messages.map((v, i) => <DMessage key={i} side={v.side} date={v.date} message={v.message} />
    )
  return (
    <ScrollView style={styles.scrollerContainer}     
    ref={scrollViewRef}
    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
        {messages}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
        scrollerContainer: {
            margin: 10,
            paddingBottom: 100,
        },
});

export default DMessages