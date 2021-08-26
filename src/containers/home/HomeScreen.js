import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { ContactListTemplate } from '../../components/templates'
import { getContact, deleteContact } from '../../stores/contact/actions'

export class HomeScreen extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    handleDeleteContact = (item) => {
        Alert.alert(`Hapus ${item.firstName} ${item.lastName}?`, `Apakah kamu yakin ingin menghapus ${item.firstName} ${item.lastName}?`, [
            {
                text: 'Batal',
                type: 'cancel'
            },
            {
                text: 'Hapus',
                onPress: () => this.props.deleteContact({ id: item.id })
            }
        ])
    }

    render() {
        return (
            <ContactListTemplate
                data={this.props.contacts}
                loading={this.props.loading}
                onUpdate={contact => this.props.navigation.navigate('UpdateContactScreen', { contact })}
                onRequestAddContact={() => this.props.navigation.navigate('AddContactScreen')}
                onDelete={this.handleDeleteContact}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    contacts: state.contact.data,
    loading: state.contact.loading
})

const mapDispatchToProps = {
    getContact,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
