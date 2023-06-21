import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, Home, Profile, Accounts, Transactions, Stats, Settings, Help } from 'Screens';
import DrawerMenu from './DrawerMenu';

const Stack = createStackNavigator();

const Stacks = ({ params }) => (
    <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
            }}
        />
        
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Transaction"
            component={Transactions}
            options={{
                headerShown: false,
            }}
        />
    
        <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Help"
            component={Help}
            options={{
                headerShown: false,
            }}
        />

    </Stack.Navigator>
);

export default Stacks;
