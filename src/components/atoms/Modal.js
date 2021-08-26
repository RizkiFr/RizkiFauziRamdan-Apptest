import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions, Platform, Keyboard, Animated, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import { colors, spacing, styles, typography } from '../../styles';

const ModalBottom = (props) => {

    const maxHeight = height - spacing.m
    const animatedMaxHeight = useRef(new Animated.Value(maxHeight))

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', handleHeighWhenKeyboardShow)
        Keyboard.addListener('keyboardDidHide', handleHeighWhenKeyboardHide)
        return () => {
            Keyboard.removeListener('keyboardDidShow')
            Keyboard.removeListener('keyboardDidHide')
        }
    }, [])

    const handleHeighWhenKeyboardShow = event => {
        Animated.timing(animatedMaxHeight.current, {
            toValue: maxHeight - event.endCoordinates?.height,
            duration: event.duration,
            useNativeDriver: false,
        }).start()
    }

    const handleHeighWhenKeyboardHide = event => {
        Animated.timing(animatedMaxHeight.current, {
            toValue: maxHeight,
            duration: event.duration,
            useNativeDriver: false,
        }).start()
    }

    return (
        <Modal
            isVisible={props.visible}
            style={style.modalContainer}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            swipeDirection='down'
            onSwipeComplete={props.onCancel}
            onBackdropPress={props.onCancel}
            onBackButtonPress={props.onCancel}
            backdropTransitionOutTiming={0}
            backdropTransitionInTiming={0}
            animationOutTiming={500}
            onModalWillHide={() => Keyboard.dismiss()}
            hideModalContentWhileAnimating
            useNativeDriverForBackdrop
            propagateSwipe
        >
            <KeyboardAvoidingView enabled={Platform.OS == 'ios' ? true : false} behavior='padding' >
                <Animated.View style={[style.contentContainer, { maxHeight: animatedMaxHeight.current }]}>
                    <View style={style.line} />
                    <View style={style.titleContainer}>
                        <Text style={style.title}>{props.title}</Text>
                        {props.rightContent}
                    </View>
                    {props.children}
                </Animated.View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const { height, width } = Dimensions.get('screen');

const style = StyleSheet.create({
    modalContainer: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    contentContainer: {
        padding: spacing.m,
        paddingTop: spacing.xs,
        minHeight: height / 4,
        borderTopLeftRadius: spacing.m,
        borderTopRightRadius: spacing.m,
        backgroundColor: colors.White,
    },
    line: {
        height: 4,
        borderRadius: 4,
        width: width / 11,
        alignSelf: 'center',
        marginBottom: spacing.m,
        backgroundColor: colors.VeryLightPink
    },
    title: {
        ...typography.Heading2Bold,
        marginBottom: spacing.xs
    },
    titleContainer: {
        ...styles.flexRowSpaceBetween,
        // height: scale(50)
    }
})

ModalBottom.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    showFooter: PropTypes.bool,
    rightContent: PropTypes.node
}

export default ModalBottom