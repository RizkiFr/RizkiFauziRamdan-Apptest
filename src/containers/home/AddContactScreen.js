import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContactFormTemplate } from '../../components/templates'
import { addContact } from '../../stores/contact/actions'

export class AddContactScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
                data: {
                    firstName: '',
                    lastName: '',
                    age: null
                }
            }
    }

    handleChangeText = (v, params) => {
        this.setState(prev => ({
            data: {
                ...prev.data,
                [params]: v
            }

        }))
    }

    handleSaveContact = () => {
        const body = this.state.data
        this.props.addContact({ body })
    }

    render() {
        return (
            <ContactFormTemplate
                data={this.state.data}
                loading={this.props.loading}
                onChangeText={this.handleChangeText}
                onSave={this.handleSaveContact}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.contact.loading
})

const mapDispatchToProps = {
    addContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactScreen)
