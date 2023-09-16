import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


const MyStory = () => {
    const userData = useSelector((state) => state.userReducer);
    return (
        <View >
            <TouchableOpacity>
                <View>
                    <Image
                        source={require("../../../assets/Images/Background.jpg")}
                        style={{
                            width: 100,
                            height: 140,
                            borderRadius: 10,
                            borderWidth: 3,
                            borderColor: "#0D5C67",
                            marginLeft: 10,
                            resizeMode: "cover"
                        }} />
                </View>
            </TouchableOpacity>
            < View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -90,



            }} >

                <Image
                    source={{
                        uri: userData.picture
                    }}
                    style={{
                        width: 52,
                        height: 52,
                        borderRadius: 30,
                        borderWidth: 3,
                        borderColor: "#3B4FB8",
                        marginLeft: 10,
                        resizeMode: "cover"
                    }} />
                <View
                    style={{
                        borderRadius: 30,
                        marginLeft: 60,
                        marginTop: -30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        resizeMode: "cover"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: "#000",
                            width: 20,
                            height: 20,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}
                    >

                        <Entypo
                            name="circle-with-plus"
                            size={16}
                            color="#D6DA0E"
                            style={{
                                alignSelf: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                resizeMode: "contain"
                            }}
                        />


                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        backgroundColor: "#787373",
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        width: 95,
                        height: 36,
                        marginLeft: 10,
                        marginTop: 9,
                        alignItems: 'center',
                        justifyContent: 'center',
                        resizeMode: "cover"
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: '600',
                        marginTop: 10,

                    }}>
                        Your Story
                    </Text>
                </View>

            </View>



        </View>
    )
}

export default MyStory