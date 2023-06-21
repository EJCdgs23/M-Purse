import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'styled-components/native'

import {McText, McImage} from 'Compponents'
import { Image } from 'Contrast'

const SignIn = (navigation) => {
    const theme = useTheme();

  return (
    <View>
      <StatusBar showHideTransition={(true)}/>
      <View style={{ flexDirection: 'row'}}>
        <McImage source={Image.color_bar}/>
        <View style={{
            marginTop: 44,
            marginHorizontal: 26,
            marginBottom: 53,
            justifyContent: 'space-between'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <McText medium size={24} color={theme.colors.text1}>02:30 PM</McText>
                <McImage source={Image.cloud} style={{marginLeft}}/>
                <McText semi size={13} color={theme.colors.text1} style={{marginLeft: 8 }}>34 C</McText>
            </View>
        </View>
      </View>
    </View>
  )
}

export default SignIn