import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';



const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={{
                    width: 100,
                    height: 80,
                    resizeMode: 'contain'

                }}
                    source={require('../../assets/Logos/my_flajoo.png')} />
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                marginHorizontal: -20,
                top: -10

            }}>
                <TouchableOpacity>
                    <Feather name="bell" size={34} color="white" style={{
                        width: 60,
                        height: 60,
                        marginLeft: -6,
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "red",
                        position: "absolute",
                        left: 10,
                        width: 25,
                        height: 18,
                        borderRadius: 25,
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 100

                    }}>
                        <Text style={{
                            color: 'white',
                            fontWeight: 'bold'
                        }}>
                            2
                        </Text>
                    </View>
                    <Feather name="message-circle" size={34} color="white" style={{
                        width: 60,
                        height: 60,
                        marginLeft: -10,
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Feather name="user" size={34} color="white" style={{
                        width: 60,
                        height: 60,
                        marginLeft: -10,
                        resizeMode: "contain"
                    }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,

    }
});

export default Header;