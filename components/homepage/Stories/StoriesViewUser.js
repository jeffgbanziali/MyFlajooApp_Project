import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { USER } from '../../../Data/Users';

const StoriesViewUser = () => {
    const renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View
                key={index}
                style={{
                    width: '100%',
                }}>

                <View
                    style={{
                        width: '100%',
                        height: 70,
                        paddingLeft: '4%',
                        alignItems: 'center',
                        flexDirection: 'row',

                    }}>
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 100,
                        }}>
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: '100%',
                                backgroundColor: 'green',
                                height: '100%',
                                borderRadius: 100,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            paddingLeft: '3%',
                        }}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    fontWeight: '600',
                                    color: 'white',
                                }}>
                                {item.user}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    color: 'white',
                                }}>
                                12 minutes ago
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    };

    return (
        <View
            style={{
                height: "66%",
                width: "100%",
                resizeMode: "cover",
                borderRadius: 25,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            }}
        >
            <FlatList
                data={USER}
                keyExtractor={(item, index) => index.toString()} // Convertir en chaîne
                renderItem={renderItem}
            />
        </View>
    );
};

export default StoriesViewUser;
