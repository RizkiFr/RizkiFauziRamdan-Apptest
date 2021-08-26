import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, spacing, } from '../../styles';
import { scale } from 'react-native-size-matters';

const SearchInput = ({ value, onChangeText, placeholder, style, clearButton, loading }) => {

    const inputRef = useRef(null)

    const containerStyle = {
        backgroundColor: 'rgba(228,228,228,0.24)',
        borderRadius: spacing.s,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.s
    }
    const textInputStyle = {
        flex: 1,
        height: scale(48),
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.s,
        color: colors.CharcoalGrey,
    }

    const iconContainerStyle = {
        backgroundColor: colors.VeryLightPink,
        height: spacing.s,
        width: spacing.s,
        borderRadius: spacing.s,
        alignItems: 'center',
        justifyContent: 'center'
    }

    const leftIconContainerStyle = {
        width: spacing.m
    }

    const handleIconPress = () => {
        inputRef.current?.clear()
        onChangeText('')
    }

    return (
        <View style={style}>
            <View style={containerStyle}>
                <View style={leftIconContainerStyle}>
                    {
                        loading ?
                            <ActivityIndicator color={colors.PaleTeal} /> :
                            <Ionicons name={'search'} color={colors.PaleTeal} size={spacing.m} />
                    }
                </View>
                <TextInput ref={inputRef} value={value} style={textInputStyle} onChangeText={v => onChangeText(v)} placeholder={placeholder} placeholderTextColor={colors.PaleTeal} />
                {
                    clearButton &&
                    <TouchableOpacity style={iconContainerStyle} activeOpacity={0.7} onPress={handleIconPress}>
                        <Ionicons name={'close'} color={colors.PaleTeal} size={spacing.s} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func.isRequired,
    style: PropTypes.object,
    clearButton: PropTypes.bool,
    loading: PropTypes.bool
}

export default SearchInput;