import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, spacing, typography } from '../styles';
import { connect } from 'react-redux';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

const AppContainer = (props) => {


    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    gestureDirection: 'horizontal',
                    headerStyle: { elevation: 0, shadowOpacity: 0, },
                    headerTitleStyle: { ...typography.ContentTitle },
                    headerBackImage: () => <FontAwesome style={{ marginHorizontal: spacing.xxs }} name={'chevron-left'} size={20} color={colors.Turquoise} />
                }}>
                <Stack.Screen options={{ headerShown: false }} name="HomeNavigator" component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps)(AppContainer)