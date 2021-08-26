import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContactFormTemplate } from '../../components/templates'
import { updateContact } from '../../stores/contact/actions'

export class UpdateContactScreen extends Component {
    constructor(props) {
        super(props),
            this.state = {
                data: props.route.params.contact
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
        this.props.updateContact({ body })
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
    updateContact
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateContactScreen)
