
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider, extendTheme } from 'native-base';
const theme = extendTheme({
    colors: {
        primary: {
            50: '#fff4da',
            100: '#ffe0ae',
            200: '#ffcc7d',
            300: '#ffb84b',
            400: '#ffa31a',
            500: '#e68a00',
            600: '#b36b00',
            700: '#814d00',
            800: '#4f2d00',
            900: '#1f0d00',
        },
    },
    config: {
        useSystemColorMode: false,
        initialColorMode: 'light',
    },
});

const AppSafeAreaProvider = () => {
    return (
        // <Provider store={store}>
        <SafeAreaProvider>
            <NativeBaseProvider theme={theme}>
                <App />
            </NativeBaseProvider>
        </SafeAreaProvider>
        // </Provider>
    );
};
AppRegistry.registerComponent(appName, () => AppSafeAreaProvider);
