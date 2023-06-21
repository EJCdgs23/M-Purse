import React from 'react';
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

const Profile = ({animatedStyle}) => {
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
            <Text>Profile Screen</Text>
        </Animated.View>
    );
};

export default Profile;