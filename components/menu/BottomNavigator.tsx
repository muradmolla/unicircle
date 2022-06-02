import { Image, StyleSheet, Text, View } from 'react-native'
import React, { EventHandler } from 'react'
import QuarterCircleButton from './QuarterCircleButton'
import Colors from '../../constants/Colors';
import AvatarButton from './AvatarButton';

interface IProps {
  leftFn: EventHandler<any>,
  rightFn: EventHandler<any>,
  avatarFn: EventHandler<any>,
  navigationType?: 'root' | 'DM',
}
// TODO: Avatar should get data from a data store.
export default function BottomSwiper(props: IProps) {
    const isRoot = props.navigationType === 'root';
    const icons = {
      X: require('../../assets/images/icons/X.png'),
      dm: require('../../assets/images/icons/DM.png'),
      heart: require('../../assets/images/icons/heart.png'),
      gear: require('../../assets/images/icons/gear.png'),
    }
  return (
    <View style={styles.container}>
            <QuarterCircleButton 
        color={isRoot ? Colors.red : Colors.yellow}
        isRight={true}
        ico={isRoot ? icons.X: icons.dm}
        onPress={props.leftFn}
      />
      <AvatarButton onPress={props.avatarFn} img={{uri: 'https://lh3.googleusercontent.com/fife/AAWUweU3ZM0-6nRNMKqHN-Du_97ATywWiarT6ORDIqDbclgPQ6YiUEywD7lbmgaILKIki9KQQuQTlQBGyDBT4mnxhei_LsifXeBd8NTKozssJC4XLqWGtyox4-MH2JdnlbRCIs5vQwsBhcpa2cpZG5AeKjzvRaJTVqjRpeBnRPH1prFfvpyr4hA2wwJ-TLN0tmt1x955TLjAJzXTjiRhGRKWaD-ypqIfNszjB9azzXpbLYfYQkYhXg6cg66h0cHruWvTXFUNHfKz2mJYhgGq60VCSOEmyKS7CdaQUtggH2nnaCU5j5ncPQlr0z8Kom8NdwMk6rh3QiwQuLrOeEZkgvzq5kV9eEFD250O5d8Cv_89VNjJclLDV1FjPKYMGB7oo8TlunH_xefi-RjLrLyhIZfNiQ3Iz7we1jSU9nZ2YzC7oTWzFuyKByYTZhLrSD4cn0Og_0OCs3HYPEE_iYmViKjey7mhtcpEiXAnFgYJJpzCvI5Cm6yiW3QAATJh1Sa9gI1S9co7n8qCiJeG2sUlVdVLJcJAVbhMU66cAlveCL10gP7w_wbLtG0W8GNgJIz3LYYMkycJC6HB1oOyBsT3RdcIpkDv0wf-ZykYI6y3z2z7uA8UhR6-JR0W-Obvf4NO8oEm0YPvjsaMwh9EI9aNeoU6t1khRVJNFbpWCgrJPbXbaJf8RzDzXssIKJQGQ8r5wfkc2sqkv3HbBy0MPP87xmcOX3vPvCCpQ09qtSzdRhQ7b5IkxiL9I8UW2yBO_O7tXiY3FrwNkQv2nua8pTt89P2R8e0YIt9v5I1-GyO1cVaqrj8bGXHV5johEn-5cWGSPXofZTH97SXi6AR3ns78d0vrkLPc8efq1r0DkeLd0bVjJLj3CcVd-ks1RNJo92kgrz2yZP6h0JEZhHs8HnvVOrSVcroufcYoWze4238CeRGHh01sydXwCHTzFQv_W6YCjcKheJqMnrrp19ed1hG0eyg34GiHjCFEjEdFaSbq1onrzbkYkDIX4neloQM8sTWzYfOzzVNDZxI7boH9dR8WgLZy4vV7Ph8IUvxgme_OKl0veKC6KhBvEvfNm_y4c76GdPsxMHxvCgkyuCFzMiqi82eOGL75eqilN2jQ8TmdoUAuv3ctcCiqs9KxW9yK60iM4yrwzhvIqcn-s9O6D1FvinYWGlOMQfP-VaM4reTiBNN0GgG7v7JXVqodORmDqvDPVEVRuS9rzg_9jIuGE9Mlivq3t5KGZ7zcQxjAoikGhn-kpyC9IEPmXEkvz2MiYfWww69TN_CQuouMjKsH-_CssXQ0ooPW0WgKeCN5vtdSDpfULed30YM=w1680-h874', width: 100, height: 100}}/>
      <QuarterCircleButton 
        color={isRoot ? Colors.green : Colors.buttonGrey}
        isRight={false}
        ico={isRoot ? icons.heart: icons.gear}
        onPress={props.rightFn}
      />
    </View>
  )
}

BottomSwiper.defaultProps = {
  navigationType: 'root',
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