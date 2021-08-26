import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native';
import { colors, typography } from '../../styles';

const LoadingScreen = (props) => {
    const isVisible = props.loading == undefined ? false : props.loading

    return (
        <Modal visible={isVisible} transparent>
            <View style={style.container}>
                <ActivityIndicator size='large' color={colors.Turquoise} />
            </View>
        </Modal>
    )
}

LoadingScreen.propTypes = {
    loading: PropTypes.bool.isRequired,
    text: PropTypes.string
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        ...typography.HeaderSubtitle,
        color: colors.White
    }
})

export default LoadingScreen;
