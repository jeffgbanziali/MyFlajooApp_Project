import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Chat from './Chat';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Message = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');

    const handleClickReturnMessageList = () => {
        console.log("clicked")
        navigation.navigate('Messages');
    }
    const handleClickCall = () => {
        console.log("clicked")
    }

    const handleClickVideoCall = () => {
        console.log("clicked")
        navigation.navigate('Settings');
    }


    return (
        <>
            <View style={{
                flex: 1,
                marginTop: 20,
                backgroundColor: '#2C2828',
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 30,
                    marginTop: 20

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
                            onPress={handleClickReturnMessageList}
                        >
                            <AntDesign name="arrowleft" size={28} color="#5F5858" style={{
                                alignSelf: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                resizeMode: "contain"
                            }} />
                        </TouchableOpacity>
                    </View>


                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 26,
                        textAlign: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        color: '#FFFFFF',
                    }}>
                        Messages
                    </Text>
                    <View style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: "#D9D9D9",
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginLeft: "11.5%",
                        marginTop: "1.5%"
                    }}
                    >
                        <TouchableOpacity
                            onPress={handleClickCall}
                        >
                            <Ionicons name="ios-call" size={28} color="#000000" style={{
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
                        backgroundColor: "#D9D9D9",
                        width: 50,
                        height: 50,
                        borderRadius: 30,
                        marginRight: "3.5%",
                        marginTop: "1.5%"
                    }}
                    >
                        <TouchableOpacity
                            onPress={handleClickVideoCall}
                        >
                            <Ionicons name="videocam" size={28} color="#000000" style={{
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
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 10,
                        marginLeft: 10,
                        marginTop: 10,
                        marginBottom: 20,
                        paddingLeft: 10,
                    }}
                >
                    <Image source={require('../../assets/Images/woman-gdc9219422_1920.jpg')}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            objectfit: 'cover',
                            borderWidth: 5,
                            borderColor: "#3B4FB8",
                        }}

                    />
                    <View style={{
                        backgroundColor: "#09C03C",
                        position: "absolute",
                        left: 80,
                        width: 16,
                        height: 16,
                        borderRadius: 25,
                        borderWidth: 2,
                        borderColor: "#000000",
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                        marginLeft: 16,
                        zIndex: 100

                    }}>
                    </View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        marginTop: 10,
                        textAlign: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        color: '#FFFFFF',


                    }}
                    >
                        {username}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'gray',
                            marginLeft: 4,
                            marginTop: 20,
                            color: '#09C03C',
                        }}
                    >
                        Online
                    </Text>
                </View>

                <Chat />
            </View>



        </>

    )
}

export default Message





