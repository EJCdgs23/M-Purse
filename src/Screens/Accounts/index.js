import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const Accounts = ({animatedStyle}) => {
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
            <Text>Accounts Screen</Text>
        </Animated.View>
    );
};

export default Accounts;
