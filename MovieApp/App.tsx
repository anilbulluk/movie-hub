import React from 'react';
import { Provider } from 'react-redux';
import AppStack from './src/navigation/AppStack';
import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}