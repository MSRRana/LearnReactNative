import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from '../Navigation/TabNavigation';
import LoginScreen from '../Screens/LoginScreen';
const Stack = createNativeStackNavigator();

function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="MyTab" component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
