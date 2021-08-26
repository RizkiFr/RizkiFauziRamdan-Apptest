import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors, spacing, typography } from '../../styles'

const Header = () => {
    return (
        <View style={style.container}>
            <Text style={style.title}>Contact Apps</Text>
            <Text style={style.subTitle}>By Rizki Fr</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        height: scale(200),
        paddingTop: spacing.m,
        backgroundColor: colors.Turquoise,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        ...typography.Heading2Bold,
        color: colors.White
    },
    subTitle: {
        ...typography.Content,
        color: colors.White
    }
})

export default Header