import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { Entypo, MaterialIcons, Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import VoiceCallAction from '../../components/CallingComponent.js/VoiceCallAction';
import { useNavigation, useRoute } from '@react-navigation/native';


const VoiceCall = () => {
    const userData = useSelector((state) => state.userReducer);

    const navigation = useNavigation();
    const route = useRoute()

    const { user } = route.params

    console.log("il est là ", user)
    return (
        <SafeAreaView
            style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                backgroundColor: "black",
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
                        {userData.pseudo}
                    </Text>
                    <Text
                        style={{
                            fontSize: 30,
                            color: "white",
                            fontWeight: "normal"
                        }}
                    >
                        {userData.pseudo}
                    </Text>

                </View>

            </View>
            <View
                style={{
                    borderRadius: 35,
                    marginTop: "2%",
                    width: '96%',
                    height: '68%',
                    backgroundColor: "pink",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    padding: 6
                }}
            >
                <View
                    style={{
                        width: "100%",
                        height: "8%",
                        borderRadius: 200,
                        padding: 6,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "row"
                    }}
                >

                    <View
                        style={{
                            width: "20%",
                            height: 40,
                            borderRadius: 200,
                            backgroundColor: "blue",

                        }}
                    >

                    </View>
                    <View
                        style={{
                            width: "30%",
                            height: 40,
                            borderRadius: 200,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",

                        }}
                    >
                        <Text style={{
                            fontSize: 24,
                            fontWeight: "500",
                            color: "white"
                        }}
                        >
                            02:33
                        </Text>


                    </View>
                </View>
                <View
                    style={{
                        width: 350,
                        height: 350,
                        borderRadius: 200,
                        backgroundColor: "red",

                    }}
                >
                    <Image
                        source={{ uri: userData.picture }}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 200,
                            resizeMode: "cover"

                        }}
                    />

                </View>
                <View
                    style={{
                        width: "100%",
                        height: "12%",
                        borderRadius: 200,
                        backgroundColor: "red",

                    }}
                >


                </View>
            </View>
            <VoiceCallAction />
        </SafeAreaView>


    )
}

export default VoiceCall