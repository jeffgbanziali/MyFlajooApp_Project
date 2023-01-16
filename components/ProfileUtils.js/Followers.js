import { Divider } from '@rneui/base';
import React from 'react';
import { View, Text } from 'react-native';

const Followers = () => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 100,
                top: -65,
                zIndex: 1,
                position: 'relative',

            }}>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                    zIndex: 1,
                }}>
                    <View style={{
                        marginRight: 10,
                    }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#F6F6F6',
                            textAlign: 'center',
                        }}>
                            200 K   {''}
                        </Text>
                        <Text style={{
                            color: '#787373',

                        }}>
                            Post
                        </Text>
                    </View>

                    <Divider orientation="vertical" width={5} />

                </View>
                <View style={{
                    flexDirection: 'row',
                    zIndex: 1,
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#F6F6F6',
                        }}>
                            200 K   {''}
                        </Text>
                        <Text style={{
                            color: '#787373',


                        }}>
                            Followers
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    zIndex: 1,
                }} >
                    <Divider orientation="vertical" width={5} />
                    <View style={{
                        marginLeft: 10,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#F6F6F6',
                        }}>
                            200 K   {''}
                        </Text>
                        <Text style={{
                            color: '#787373',


                        }}>
                            Following
                        </Text>
                    </View>

                </View>
            </View>

        </>

    );
}


export default Followers;
