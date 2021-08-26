import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { typography, colors, spacing, styles } from '../../styles';
import { scale } from 'react-native-size-matters';

const Input = (props) => {


    const height = props.textarea ? 100 : 48

    const containerStyle = {
        marginVertical: spacing.xs
    }

    const inputContainerStyle = {
        borderColor: props.error ? colors.Tomato : props.success ? colors.Turquoise : colors.VeryLightPink,
        backgroundColor: props.disabled ? 'rgba(228,228,228,0.24)' : colors.White,
        borderRadius: spacing.s,
        borderWidth: props.disabled ? 0 : props.success || props.error ? 2 : 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
    const textInputStyle = {
        flex: 1,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.s,
        color: props.disabled ? colors.PaleTeal : colors.CharcoalGrey,
        fontFamily: `Poppins-${props.disabled ? 'Italic' : 'Regular'}`,
        height: scale(height)
    }

    const labelStyle = {
        ...typography.HeaderTitle,
        marginBottom: spacing.xxs,
    }

    const labelContainerStyle = {
        ...styles.wrapperRowSpaceBetween,
        padding: 0,
        alignItems: 'center',
    }

    const errorTextStyle = {
        ...typography.SmallContentItalic,
        color: colors.Tomato
    }

    const iconContainerStyle = {
        backgroundColor: colors.VeryLightPink,
        height: spacing.m,
        width: spacing.m,
        borderRadius: spacing.m,
        marginHorizontal: spacing.s,
        alignItems: 'center',
        justifyContent: 'center'
    }

    const handleChangeText = v => {
        props.onChangeText(v)
    }

    return (
        <View style={[containerStyle, props.containerStyle]}>
            {
                (props.label || props.error) &&
                <View style={labelContainerStyle}>
                    <Text style={labelStyle}>{props.label}</Text>
                    <Text style={errorTextStyle}>{props.error}</Text>
                </View>
            }
            <View style={inputContainerStyle}>
                <TextInput
                    {...props}
                    ref={props.inputRef}
                    value={props.value}
                    style={textInputStyle}
                    editable={!props.disabled && props.editable}
                    placeholder={props.placeholder ?? props.label}
                    placeholderTextColor={colors.PaleTeal}
                    multiline={props.textarea}
                    onChangeText={handleChangeText}
                />
                {
                    props.icon &&
                    <TouchableOpacity style={iconContainerStyle} activeOpacity={0.7} onPress={props.onIconPress}>
                        <FontAwesome name={props.icon} color={colors.PaleTeal} size={spacing.s} />
                    </TouchableOpacity>
                }
                {props.node}
            </View>
        </View>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    success: PropTypes.bool,
    error: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    onIconPress: PropTypes.func,
    style: PropTypes.object,
    textarea: PropTypes.bool,
    editable: PropTypes.bool,
    currency: PropTypes.string,
}

export default memo(Input)