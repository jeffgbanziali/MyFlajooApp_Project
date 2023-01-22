import { View, Text, Image } from 'react-native'
import React from 'react'
import { USER } from "../../Data/Users";
const ChatOnline = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                alignSelf: 'center',


            }}
        >
            {
                USER.map((story, index) => (
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                padding: 2,
                                alignItems: 'center',

                            }}
                        >
                            <Image source={require('../../assets/Images/woman-gdc9219422_1920.jpg')}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 100,
                                    objectfit: 'cover',
                                    marginRight: 10,
                                    alignContent: 'center',
                                    marginBottom: 10,
                                    borderWidth: 5,
                                    borderColor: "#3B4FB8",
                                }}

                            />
                            <View style={{
                                backgroundColor: "#09C03C",
                                position: "absolute",
                                left: 50,
                                width: 14,
                                height: 14,
                                borderRadius: 25,
                                borderWidth: 2,
                                borderColor: "#000000",
                                justifyContent: "center",
                                alignSelf: "center",
                                alignItems: "center",
                                marginLeft: 16,
                                marginTop: 60,
                                zIndex: 100

                            }}>
                            </View>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'normal',
                                    color: '#fff',
                                }}
                            >
                                Koukouda
                            </Text>


                        </View>
                    </View>
                ))
            }


        </View>
    )
}

export default ChatOnline