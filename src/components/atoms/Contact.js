import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { colors, spacing, typography } from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { scale } from 'react-native-size-matters';

const Contact = (props) => {

    const containerStyle = {
        flexDirection: 'row',
        marginVertical: spacing.xs,
        marginHorizontal: spacing.s,
        alignItems: 'center',
    }

    const avatarStyle = {
        width: scale(42),
        height: scale(42),
        borderRadius: scale(21),
        marginRight: spacing.s,
        backgroundColor: colors.VeryLightPink6,
        alignItems: 'center',
        justifyContent: 'center'
    }

    const textContainerStyle = {
        flex: 1,
    }

    const nameStyle = {
        ...typography.ContentTitle,
    }
    const ageStyle = {
        ...typography.SmallContent,
        color: colors.SteelGrey
    }

    return (
        <TouchableOpacity style={containerStyle} activeOpacity={0.7} disabled={!props.onPress} onPress={props.onPress}>
            {
                props.data.photo == 'N/A' ?
                    <View style={avatarStyle}>
                        <FontAwesome name='user' size={spacing.m} color={colors.PaleTeal} />
                    </View> :
                    <Image source={{ uri: props.data?.photo }} style={avatarStyle} />
            }
            <View style={textContainerStyle}>
                <Text style={nameStyle} numberOfLines={1} >{props.data?.firstName} {props.data?.lastName}</Text>
                <Text style={ageStyle} numberOfLines={1} >{props.data?.age} Tahun</Text>
            </View>
        </TouchableOpacity>
    )
}

Contact.propTypes = {
    data: PropTypes.shape({
        photo: PropTypes.string,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }),
    onPress: PropTypes.func
}

export default memo(Contact)