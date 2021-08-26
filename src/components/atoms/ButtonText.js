import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { colors, typography } from '../../styles';
import { scale } from 'react-native-size-matters';

const ButtonText = ({ title, onPress, fontSize = scale(12), fontWeight = 'bold', color = colors.Turquoise, style }) => {

    const textStyle = {
        ...fontWeight == 'bold' ?
            typography.HeaderSubtitle :
            typography.SmallContent
        ,
        color: color,
        fontSize: fontSize,
        ...style
    }
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    )
}

ButtonText.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    fontSize: PropTypes.number,
    fontWeight: PropTypes.string,
    color: PropTypes.string
}

export default ButtonText;