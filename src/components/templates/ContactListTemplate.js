import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, Text, View, StatusBar } from 'react-native'
import { ButtonText, Contact, Header, LoadingScreen, SearchInput } from '../atoms'
import { colors, spacing } from '../../styles'
import { ActionModal } from '../organisms'

const ContactListTemplate = (props) => {

    const [key, setKey] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [contact, setContact] = useState({})

    const handleSelectContact = (item) => {
        setContact(item)
        setShowModal(true)
    }

    const renderContact = ({ item }) => {
        return (
            <Contact data={item} onPress={() => handleSelectContact(item)} />
        )
    }

    const renderHeader = useMemo(() => {
        return (
            <>
                <Header />
                <SearchInput placeholder='Cari...' style={style.searchInput} value={key} onChangeText={v => setKey(v)} clearButton />
                <ButtonText title='+ Kontak' style={style.buttonText} onPress={props.onRequestAddContact} />
            </>
        )
    })
    return (
        <View style={style.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
            <FlatList
                data={props.data.filter(v => v.firstName?.toLowerCase().match(key.toLowerCase()))}
                keyExtractor={item => item.id}
                renderItem={renderContact}
                ListHeaderComponent={renderHeader}
            />
            <LoadingScreen loading={props.loading} />
            <ActionModal
                visible={showModal}
                title={`${contact.firstName} ${contact.lastName}`}
                onCancel={() => setShowModal(false)}
                onUpdate={() => { setShowModal(false); props.onUpdate(contact) }}
                onDelete={() => { setShowModal(false); props.onDelete(contact) }}
            />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.White
    },
    buttonText: {
        alignSelf: 'flex-end',
        marginRight: spacing.s
    },
    searchInput: {
        margin: spacing.xs,
        marginHorizontal: spacing.s
    }
})

ContactListTemplate.propTypes = {
    data: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onRequestAddContact: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ContactListTemplate