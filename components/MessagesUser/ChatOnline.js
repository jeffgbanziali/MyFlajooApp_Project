import { View, Text, Image } from 'react-native'
import React from 'react'

const ChatOnline = () => {
    return (
        <View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: 10,
                }}
            >
                <View
                    style={{
                        display: 'flex',
                        padding: 20,
                        alignItems: 'center',

                    }}
                >
                    <Image source={require('../../assets/Images/woman-gdc9219422_1920.jpg')}
                        style={{
                            width: 70,
                            height: 70,
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
                        left: 60,
                        width: 14,
                        height: 14,
                        borderRadius: 25,
                        borderWidth: 2,
                        borderColor: "#000000",
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                        marginLeft: 16,
                        marginTop: 66,
                        zIndex: 100

                    }}>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}
                    >
                        Koukouda
                    </Text>


                </View>
            </View>
        </View>
    )
}

export default ChatOnline