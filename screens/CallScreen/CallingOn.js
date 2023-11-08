import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Image } from 'react-native';
import VoiceCallAction from '../../components/CallingComponent.js/VoiceCallAction';
import { useNavigation, useRoute } from '@react-navigation/native';

const CallingOn = () => {
    const userData = useSelector((state) => state.userReducer);
    const navigation = useNavigation();
    const route = useRoute()

    const { user } = route.params

    console.log("il est là ", user)


    const handleGoBack = () => {
        console.warn('GoBack');
        navigation.pop()
    }
    return (
        <>


            <ImageBackground
                source={require("../../assets/Images/1233.jpg")}
                style={{
                    height: '100%',
                    width: '100%',

                }} />
            <SafeAreaView
                style={{
                    width: '100%',
                    height: '100%',
                    position: "absolute",
                    alignItems: 'center',
                    zIndex: 1
                }}
            >
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        zIndex: 1
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            height: '6%',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 6
                        }}
                    >
                        <TouchableOpacity
                            onPress={handleGoBack}
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <MaterialIcons name="keyboard-arrow-down" size={30} color="white" />

                        </TouchableOpacity>
                        <View
                            style={{
                                width: 90,
                                height: 40,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="plus" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 40,
                                    height: 40,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Entypo name="dots-three-vertical" size={24} color="white" />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View
                        style={{
                            width: '80%',
                            height: '13%',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: 6
                        }}
                    >
                        <View
                            style={{
                                width: '100%',
                                height: '100%',
                                alignItems: "center",


                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 45,
                                    color: "white",
                                    fontWeight: "bold"
                                }}
                            >
                                {user.pseudo}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                    fontWeight: "normal"
                                }}
                            >
                                Ringin onnnn
                            </Text>

                        </View>

                    </View>
                    <View
                        style={{
                            borderRadius: 35,
                            marginTop: "2%",
                            width: '96%',
                            height: '60%',
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            padding: 6
                        }}
                    >
                        <View
                            style={{
                                width: 300,
                                height: 300,
                                borderRadius: 200,
                                backgroundColor: "red",

                            }}
                        >
                            <Image
                                source={{ uri: user.picture ? user.picture : "https://pbs.twimg.com/media/EFIv5HzUcAAdjhl.png" }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: 200,
                                    resizeMode: "cover"

                                }}
                            />

                        </View>
                    </View>
                    <VoiceCallAction />
                </View>
            </SafeAreaView>
        </>

    )
}

export default CallingOn