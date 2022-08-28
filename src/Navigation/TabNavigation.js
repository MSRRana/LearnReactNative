import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MainScreen from '../Screens/MainScreen';
import profileScreen from '../Screens/profileScreen';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator
            Tabcontent={props => <Tabcontent {...props} />}
        // screenOptions={{
        //     tabBarActiveBackgroundColor: '#831843',
        //     tabBarInactiveBackgroundColor: '#fff',
        //     tabBarActiveTintColor: '#ffff',
        //     tabBarInactiveTintColor: '#831843',

        // }}

        >
            <Tab.Screen name="Main" component={MainScreen}
                options={{
                    headerShown: false, tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home-outline" size={25} color="#831843" />
                    )

                }} />
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false, tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="checkbox-outline" size={25} color="#831843" />
                    )
                }} />
            <Tab.Screen name="profileScreen" component={profileScreen}
                options={{
                    headerShown: false, tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => (
                        <Icon name="person-outline" size={25} color="#831843" />
                    )
                }} />

        </Tab.Navigator>

    );
}