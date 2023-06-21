import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'

import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import { dummyData } from 'Mock'

const Home = ({animatedStyle}) => {
    const theme = useTheme()
    return (
        <Animated.View
            style={{
                flex: 1,
                //justifyContent: 'center',
                //alignItems: 'center',
                backgroundColor: theme.color.backgourd,
                padding: 44,
                ...animatedStyle
            }}
        >
            {/*Header*/}

            <HeaderSection>
                <View style={{flex: 'row', alignItems: 'center' }}>
                    <McImage source={Images.logo}/>
                    <McText secondary size={28} color={theme.colors.text1}>Mpurse</McText>
                </View>
                <McImage source={Images.union}
                style={{
                    with: 20,
                    height: 20,
                    tintColor: theme.colors.text2,

                }}
                />
            </HeaderSection>

            <HeaderSection  style={{marginTop: 50 }} >
                <McText semi size={16} color={theme.colors.text2}>
                    Account Overview
                </McText>
            </HeaderSection>
            <View
            
            style={{
                marginHorizontal: 25,
                marginTop: 20,
                height: 116,
                backgroundColor: theme.colors.boxBackground,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center'
            }}

            >
                <View style= {{marginLeft: 25}}>
                    <McText semi size={24} color={theme.colors.text} style={{
                        lineHeight: 30,
                        marginBottom: 8
                    }}>15,700</McText>
                    <McText size={15} color={theme.colors.text3}>Current balance</McText>
                </View>
                <TouchableOpacity style={{
                width: 48,
                height: 48,
                borderRadius: 24,
                marginRight: 25,
                backgourdColor: theme.colors.primary,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <McImage source={Images.plus}/>
            </TouchableOpacity>
            </View>
            
            <HeaderSection style={{marginTop: 40}}>
                <McText semi size={16} color={theme.colors.text2}>Send Money</McText>
                <McImage source={Images.scan} style={{width: 24, height: 24, tintColor: theme.colors.text2}}/>

            </HeaderSection>

        <View>
            <FlatList>
                keyExractor={(item) => item.id}
                horizontal
                showHorizontalScrollIndicator={false}
                data={dummyData.SendMoneyRecords}
                renderItem={({item, index})=> {
                    return (
                        <View style={{
                            marginTop: 20,
                            marginLeft: index === 0 ? 25 : 0,
                            marginRight: index === dummyData.SendMoneyRecords.length - 1 ? 0 : 10,

                        }}>
                            {index === 0 ? (
                              <View style={{
                                width: 52,
                                height: 120,
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}>
                                <TouchableOpacity style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 26,
                                    backgourdColor: theme.colors.primary,
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                }}>
                                    <McImage source={item.img}/> 
                                </TouchableOpacity>
                                        
                                    </View>
                            ):(
                                        <View style={{
                                            width: 110,
                                            height: 120,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: theme.colors.boxBackground,
                                            borderRadius: 12
                                        }}>
                                            <View style={{
                                                width: 42,
                                                height: 42,
                                                borderRadius: 21,
                                                borderWidth: 1,
                                                borderColor: 'rgba (58, 66, 118, 0.2)',
                                                backgroundColor: theme.colors.boxBackground,
                                                jestidyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <McImage source={item.avatar}/>
                                            </View>
                                            <McText size={16} color={theme.colors.text3} 
                                            style={{ marginTop: 16,
                                            
                                            }} 
                                            > 

                                            {item.name}
                                            
                                            </McText>
                                        </View>
                            )}
                        </View>
                    )
                }}
            </FlatList>
        </View>
            <HeaderSection style={{marginTop: 40}}>
                <McText semi size={16} color={theme.colors.text2}>Service</McText>
                <McImage source={Images.filter} style={{width: 24, height: 24, tintColor: theme.colors.text2}}/>

            </HeaderSection>
               <View style={{
                marginTop: 20,
                marginHorizontal: 25,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
               }}>
                <View>
                    {dummyData.Services?.map((item, index) =>{
                        return (
                            <View
                            key={item.id}
                           style={{
                            height: 96,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: (index == 0 || index === 4) ? 0 : 28,
                            marginTop: index > 3 ? 20 : 0,
                           }}
                            >
                                <TouchableOpacity
                                 style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 12,
                                    backgroundColor: theme.colors.boxBackground,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <McImage source={item.img}/>
                                    
                                </TouchableOpacity>
                                <McText semi size={10} color={theme.colors.text3} style={{
                                    marginTop: 6, with:52, textAlign: 'center'
                                }}>{item.name}</McText>
                            </View>
                        )
                    })}
                </View>
                </View> 
        </Animated.View>
    );
};

const HeaderSection = styled.View`
margin: 0px 25px;
flex-directions: row;
justify-Content: space-between;
align-Items: center;
`

export default Home;
