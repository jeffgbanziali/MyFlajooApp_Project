import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Search = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 10,
            }}
        >
            <TextInput style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                borderRadius: 10,
                margin: 10,
                padding: 10,
                width: 300,
                backgroundColor: '#FFFFFF',
            }}
                placeholder="Search"
            />
        </View>
    )
}

export default Search

 {/* <View
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
                            pseudo
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
                </View>*/}