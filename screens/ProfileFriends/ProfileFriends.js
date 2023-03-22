import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProfileFriendsUtils from '../../components/ProfileFriendsUtils/ProfileFriendsUtils';
import FollowHandler from '../../components/ProfileUtils.js/FollowHandler';

const ProfileFriends = () => {


    const navigation = useNavigation();
    const handleClickReturnHome = () => {
        console.log("clicked")
        navigation.navigate('HomeScreen');
    }
    const handleClickSettings = () => {
        console.log("clicked")
        navigation.navigate('Settings');
    }
    return (

        <ScrollView style={styles.container}>
            <>
                <View  >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: '#3D3939',
                            borderRadius: 30,
                            paddingBottom: 90,
                            marginTop: 50,

                        }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',

                        }}
                        >
                            <View style={{
                                justifyContent: 'center',
                                alignSelf: 'center',
                                backgroundColor: "#161414",
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                marginLeft: "3.5%",
                                marginTop: "1.5%"
                            }}
                            >
                                <TouchableOpacity
                                    onPress={handleClickReturnHome}
                                >
                                    <AntDesign name="arrowleft" size={28} color="#5F5858" style={{
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        resizeMode: "contain"
                                    }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignSelf: 'center',
                                backgroundColor: "#161414",
                                width: 50,
                                height: 50,
                                borderRadius: 30,
                                marginRight: "3.5%",
                                marginTop: "1.5%"
                            }}
                            >
                                <TouchableOpacity onPress={handleClickSettings}>
                                    <Entypo name="dots-three-horizontal" size={28} color="#5F5858" style={{
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                        alignItems: 'center',
                                        resizeMode: "contain"
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: -16,

                            }}>
                            <TouchableOpacity>
                                <Image source={{ uri: "https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png" }}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 100,
                                        objectFit: 'cover',
                                        borderWidth: 5,
                                        borderColor: "red",
                                    }}

                                />

                                <View style={{
                                    backgroundColor: "#09C03C",
                                    position: "absolute",
                                    left: 65,
                                    width: 16,
                                    height: 16,
                                    borderRadius: 25,
                                    borderWidth: 2,
                                    borderColor: "#000000",
                                    justifyContent: "center",
                                    alignSelf: "center",
                                    alignItems: "center",
                                    marginLeft: 16,
                                    marginTop: 75,
                                    zIndex: 100

                                }}>
                                </View>
                            </TouchableOpacity>

                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                                Jeff
                            </Text>
                            <Text style={{ fontSize: 15, color: '#5F5858' }}>
                                Koukouda
                            </Text>
                        </View>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            width: "100%",
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: 50,
                                width: 250,
                            }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flex: 1,
                                    }}
                                >
                                    <View>
                                        <FollowHandler  type={"card"} />
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            backgroundColor: 'blue',
                                            borderRadius: 10,
                                            padding: 8,
                                            width: 120,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{
                                            textAlign: 'center',
                                            fontFamily: 'Roboto',
                                            fontWeight: 'semibold',
                                            justifyContent: 'center',
                                            fontSize: 20,
                                            color: 'white'
                                        }}>
                                            Chating
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text>
                                Membre depuis le : 16 Juillet 2021
                            </Text>
                        </View>
                    </View>
                </View>
                <View >
                    <ProfileFriendsUtils />
                </View>
                <View >
                </View>
                <View >

                </View>

            </>

        </ScrollView >

    );

};




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2828',
    }
})

export default ProfileFriends;
