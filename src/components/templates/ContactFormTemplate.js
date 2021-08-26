import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native'
import { colors, spacing } from '../../styles'
import { AvatarPicker, Button, Input } from '../atoms'

const ContactFormTemplate = (props) => {
    const age = props.data.age ? props.data.age?.toString() : ''
    return (
        <ScrollView style={style.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
            <AvatarPicker onImagePicked={v => props.onChangeText(v, 'photo')} photo={props.data.photo} />
            <Input label='Nama Depan' value={props.data.firstName} onChangeText={v => props.onChangeText(v, 'firstName')} />
            <Input label='Nama Belakang' value={props.data.lastName} onChangeText={v => props.onChangeText(v, 'lastName')} />
            <Input label='Umur' value={age} onChangeText={v => props.onChangeText(parseInt(v), 'age')} keyboardType='number-pad' />
            <Button title='SIMPAN' onPress={props.onSave} loading={props.loading} />
        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White,
        padding: spacing.s
    }
})

ContactFormTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    onChangeText: PropTypes.func.isRequired,
}

export default ContactFormTemplate;