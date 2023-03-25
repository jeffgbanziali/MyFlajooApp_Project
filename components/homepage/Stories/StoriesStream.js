import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const StoriesStream = () => {
    const navigation = useNavigation(false)
    const goToHome = () => {
        console.log('clicked')
        navigation.navigate('HomeScreen')
    }

    const goProfil = () => {
        navigation.navigate("ProfilFriends")
    }
    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
            }}>


                <View style={{
                    flex: 1,
                    height: "100%",
                    position: "relative",
                    backgroundColor: 'black',
                    alignItems: "center",
                    overflow: "hidden",
                }}>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <View
                        style={{
                            flexDirection: "row",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            onPress={goToHome}
                        >
                            <View
                                style={{
                                    backgroundColor: '#343232',
                                    height: 40,
                                    width: 40,
                                    marginLeft: 10,
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <Entypo name="cross" size={24} color="black" />
                            </View>
                        </TouchableOpacity>

                        <View
                            style={{
                                height: 3,
                                width: "50%",
                                backgroundColor: 'gray',
                                marginLeft: 10
                            }}
                        >
                            <View
                                style={{
                                    height: '100%',
                                    width: "50%",
                                    backgroundColor: 'white',
                                }}
                            >
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: '#343232',
                                height: 40,
                                width: 80,
                                marginLeft: 10,
                                borderRadius: 10,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <FontAwesome5 name="clock" size={18} color="white" />
                            <Text
                                style={{
                                    marginLeft: 4,
                                    color: 'white',
                                    fontSize: 12
                                }}>

                                21min
                            </Text>

                        </View>
                        <TouchableOpacity
                            onPress={goProfil}
                        ><View
                            style={{
                                height: 60,
                                width: 60,
                                marginLeft: 10,
                                borderRadius: 30,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                                <Image
                                    source={{
                                        uri: 'https://www.10wallpaper.com/wallpaper/2880x1800/2102/Assassins_Creed_Eivor_AC_2021_Game_HD_Poster_2880x1800.jpg'
                                    }}
                                    style={{
                                        height: 60,
                                        width: 60,
                                        borderRadius: 30,
                                        borderWidth: 2,
                                        borderColor: "red",
                                    }}

                                />
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            position: "absolute",
                            width: "100%",
                            justifyContent: "center",
                            top: 45

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                            }}
                        >
                            Your Story
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            backgroundColor: "red",
                            position: "absolute",
                            borderRadius: 30,
                            width: "90%",
                            height: "80%",
                            top: '8%',
                            class: "momo"
                        }}
                    >
                        <Image source={{
                            uri: 'https://www.10wallpaper.com/wallpaper/2880x1800/2102/Assassins_Creed_Eivor_AC_2021_Game_HD_Poster_2880x1800.jpg'
                        }}
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: 30,
                            }}
                        />

                    </View>
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                            flexDirection: "row",
                            position: "absolute",
                            bottom: 10,
                            alignItems: 'center'


                        }}
                    >
                        <View style={{
                            width: "75%",
                            height: 50,
                            flexDirection: "row",
                            marginLeft: 6,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <TextInput
                                placeholder='write a message here to send...'
                                placeholderTextColor="white"
                                style={{
                                    height: 45,
                                    width: "100%",
                                    borderRadius: 30,
                                    borderColor: "white",
                                    paddingLeft: 20,
                                    fontSize: 18,
                                    fontWeight: "normal",
                                    overflow: 'hidden',
                                    color: "white",
                                    borderWidth: 1,
                                }}
                            />
                        </View>
                        <View style={{
                            width: 50,
                            height: 50,
                            marginLeft: 6,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <TouchableOpacity>
                                <Ionicons name="md-heart-sharp" size={40} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 50,
                            height: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        >
                            <TouchableOpacity>
                                <FontAwesome name="send" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};




export default StoriesStream;
