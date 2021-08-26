import * as React from 'react';
import { StackActions, CommonActions, getActionFromState, getStateFromPath } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function goBack() {
    navigationRef.current?.goBack();
}

export function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop());
}

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function reset(name, params) {
    navigationRef.current?.dispatch(CommonActions.reset({
        index: 0,
        routes: [{ name, params }]
    }));
}

export function linkTo(path, config = null) {
    const state = getStateFromPath(path, config);
    const action = getActionFromState(state);
    if (action !== undefined) {
        navigationRef.current?.dispatch(action);
    }
}