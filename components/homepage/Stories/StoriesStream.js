import React, { useEffect, useState } from 'react';
import { View, Text, Animated, StatusBar, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const StoriesStream = () => {
    const userData = useSelector((state) => state.userReducer);
    const navigation = useNavigation(false)
    const goToHome = () => {
        console.log('clicked')
        navigation.navigate('HomeScreen')
    }

    const goProfil = () => {
        navigation.navigate("ProfilFriends")
    }

    useEffect(() => {
        console.log('useEffect')
        const timer = setTimeout(() => {
            navigation.goBack();
        }, 5000);

        Animated.timing(progress, {
            toValue: 5,
            duration: 5000,
            useNativeDriver: false,
        }).start();
        return () => {
            clearTimeout(timer);
        };

    }, [])

    const [progress, setProgress] = useState(new Animated.Value(0))

    const progressAnimation = progress.interpolate({
        inputRange: [0, 5],
        outputRange: ['0%', '100%'],
    })


    return (
        <KeyboardAvoidingView style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
        }}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
            }}>


                <View style={{
                    flex: 1,
                    height: "100%",
                    position: "relative",
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
                            marginTop: 30,
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
                                width: "80%",
                                backgroundColor: 'gray',
                                marginLeft: 10,
                            }}
                        >
                            <Animated.View
                                style={{
                                    height: '100%',
                                    width: progressAnimation,
                                    backgroundColor: 'white',
                                }}
                            >
                            </Animated.View>
                        </View>


                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            position: "absolute",
                            width: "100%",
                            justifyContent: "space-between",
                            marginLeft: '30%',
                            marginTop: "18%",

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
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: '#343232',
                                    height: 40,
                                    width: 80,
                                    borderRadius: 10,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",

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
                            >
                                <View
                                    style={{
                                        marginLeft: 10,
                                        height: 40,
                                        width: 40,
                                        borderRadius: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: userData.picture
                                        }}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            borderRadius: 30,
                                        }}

                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

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
                            top: '12%',
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
