import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, typography } from '../styles';
import { scale } from 'react-native-size-matters';

import HomeScreen from '../containers/home/HomeScreen';
import AddContactScreen from '../containers/home/AddContactScreen';
import UpdateContactScreen from '../containers/home/UpdateContactScreen';


const Stack = createStackNavigator();

const HomeNavigator = () => {

    const isAndroid = Platform.OS == 'android'
    const iconSize = scale(20)

    return (
        <Stack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                gestureDirection: 'horizontal',
                headerTitleContainerStyle: { left: isAndroid ? scale(51) : spacing.s, flex: 1 },
                headerStyle: { elevation: 0, shadowOpacity: 0 },
                headerTitleStyle: { ...typography.ContentTitle },
                headerBackTitleVisible: false,
                headerBackImage: () => <FontAwesome style={{ marginHorizontal: isAndroid ? spacing.xs : spacing.s }} name={'chevron-left'} size={iconSize} color={colors.Turquoise} />
            }}>
            <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="AddContactScreen" options={{ title: 'Tambah Kontak' }} component={AddContactScreen} />
            <Stack.Screen name="UpdateContactScreen" options={{ title: 'Ubah Kontak' }} component={UpdateContactScreen} />

        </Stack.Navigator>
    );
}

export default HomeNavigator;