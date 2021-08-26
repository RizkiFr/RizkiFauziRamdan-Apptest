import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { typography, colors, spacing, styles } from '../../styles';
import { scale } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Button = ({ title, type, color, bgColor, onPress, disabled, style, containerStyle, loading, size, icon }) => {


    const isMedium = size == 'medium'
    const btnBgColor = type === 'filled' ? bgColor ?? colors.Turquoise : 'transparent'
    const btnTextColor = type === 'filled' ? colors.White : color ?? colors.Turquoise
    const buttonHeight = scale(isMedium ? 48 : 34);

    const wrapperStyle = {
        backgroundColor: (disabled || loading) ? colors.VeryLightPink : type == 'negative' ? colors.VeryLightPink24 : btnBgColor,
        paddingVertical: isMedium ? spacing.xs : spacing.xxs,
        marginVertical: spacing.s - spacing.xxs,
        paddingHorizontal: isMedium ? spacing.m : spacing.s,
        borderRadius: buttonHeight,
        height: buttonHeight,
        justifyContent: 'center',
    }

    const textStyle = {
        ...typography.ContentTitle,
        color: disabled ? colors.PaleTeal : type == 'negative' ? colors.CharcoalGrey : btnTextColor,
        textAlign: 'center',
    }

    const border = type === 'outline' && { borderColor: btnTextColor, borderWidth: 2 }

    return (
        <TouchableOpacity style={containerStyle} activeOpacity={0.7} onPress={onPress} disabled={disabled || loading}>
            <View style={[wrapperStyle, border, style]}>
                {
                    loading ? <ActivityIndicator color={colors.White} /> :
                        <View style={{ ...styles.flexRow, justifyContent: 'center' }}>
                            {icon && <Ionicons name={icon} color={btnTextColor} style={{ marginRight: title ? spacing.xxs : 0 }} size={isMedium ? spacing.m : spacing.s} />}
                            <Text style={textStyle}>{title}</Text>
                        </View>
                }
            </View>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['filled', 'outline', 'negative']),
    disabled: PropTypes.bool,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    style: PropTypes.object,
    containerStyle: PropTypes.object,
    loading: PropTypes.bool
}

Button.defaultProps = {
    type: 'filled',
    color: colors.Turquoise,
    size: 'medium'
}

export default Button;