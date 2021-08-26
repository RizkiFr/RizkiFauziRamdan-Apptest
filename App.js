/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native'
import AppContainer from './src/navigations/AppContainer';
import { Provider } from 'react-redux';
import store from './src/stores';
import axios from 'axios';
import Toast from 'react-native-simple-toast';

axios.interceptors.response.use(
  response => response,
  error => {
    Toast.show(error.response?.data?.message, Toast.LONG);
    return Promise.reject(error)
  }
)

const App: () => Node = () => {
  return (
    <>
      <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
};

export default App;
