import React from 'react';
import { View, Text, Switch } from 'react-native';
import Animated from 'react-native-reanimated';
import { ThemeContext, useTheme } from 'styled-components/native';
import { useThemeContex } from 'Themes'

import { McText } from 'Components'

const Settings = ({animatedStyle}) => {
    const theme = useTheme()
    return (
        <Animated.View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.color.backgourd,
                ...animatedStyle
            }}
        >
            <McText bold size={24} color={theme.colors.text1}>
                Settings Screen
                </McText>
            <View style={{
                marginTop: 50,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <McText size={16} color={theme.colors.text1} style={{
                    marginRigth: 10
                }}>Light</McText>
                <Switch
                value={ThemeContext.mode === 'dark'}
                onValueChange={(value) => {
                    ThemeContext.setMode(value ? 'dark': 'light')
                }} 
                ></Switch>
                <McText size={16} color={theme.colors.text1} style={{
                    marginLeft: 10
                }}>Dark</McText>
            </View>
        </Animated.View>
    );
};

export default Settings;
