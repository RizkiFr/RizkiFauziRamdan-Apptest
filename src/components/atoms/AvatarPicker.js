import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors, spacing } from '../../styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';
import { scale } from 'react-native-size-matters';

const AvatarPicker = (props) => {

    const [loading, setLoading] = useState(false)


    const showImageLibrary = () => {
        const options = {
            quality: 0.5,
            mediaType: 'photo',
            maxWidth: 720,
            maxHeight: 720,
            includeBase64: true
        }
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                props.onImagePicked(`data:${response.assets[0].type};base64,${response.assets[0].base64}`)
            }
        })
    }

    return (
        <View style={style.container}>
            <View style={style.avatarContainer}>
                {
                    props.photo && props.photo != 'N/A' ?
                        <Image
                            style={style.avatar}
                            source={{ uri: props.photo }}
                            onLoad={() => setLoading(false)}
                        /> :
                        <FontAwesome name='user' size={spacing.l} color={colors.PaleTeal} />
                }
                <TouchableOpacity style={style.iconContainer} activeOpacity={0.7} disabled={props.loading} onPress={showImageLibrary}>
                    <FontAwesome name='camera' size={spacing.s} color={colors.Blueberry} />
                </TouchableOpacity>
                {
                    (props.loading || loading) &&
                    <View style={style.loading}>
                        <ActivityIndicator size='large' color={colors.White} />
                    </View>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    avatar: {
        height: scale(100),
        width: scale(100),
        borderRadius: scale(48),
    },
    avatarContainer: {
        height: scale(100),
        width: scale(100),
        borderRadius: scale(48),
        backgroundColor: colors.VeryLightPink24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        height: scale(32),
        width: scale(32),
        borderRadius: scale(16),
        backgroundColor: colors.LightLavender,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 2
    },
    loading: {
        height: scale(100),
        width: scale(100),
        borderRadius: scale(48),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
    }
})

AvatarPicker.propTypes = {
    photo: PropTypes.string,
    onImagePicked: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default memo(AvatarPicker)