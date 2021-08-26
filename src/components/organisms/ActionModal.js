import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Modal, Button } from '../atoms'
import { colors } from '../../styles'

const ActionModal = (props) => {
    return (
        <Modal visible={props.visible} title={props.title} onCancel={props.onCancel}>
            <Button title='Ubah' size='small' onPress={props.onUpdate} />
            <Button title='Hapus' size='small' type='outline' onPress={props.onDelete} color={colors.Tomato} />
        </Modal>
    )
}


const style = StyleSheet.create({

})

ActionModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ActionModal;