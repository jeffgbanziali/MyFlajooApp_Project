import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { AntDesign } from '@expo/vector-icons';





const Header = () => {
    const navigation = useNavigation(false);
    const handleClickProfile = () => {
        console.log("clicked")
        navigation.navigate('Profile');
    }
    const handleClickMessage = () => {
        console.log("clicked")
        navigation.navigate('Messages');
    }
    const handleClickNotifications = () => {
        console.log("clicked")
        navigation.navigate('Notifications');
    }
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
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: -10,
                top: -20

            }}>
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: "#161414",
                    borderRadius: 30,
                    marginLeft: "3.5%",
                    marginTop: "1.5%",
                    width: 50,
                    height: 50,
                    zIndex: 100
                }}>
                    <TouchableOpacity  onPress={handleClickNotifications}>
                        <Feather name="bell" size={25} color="white" style={{
                            alignSelf: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            resizeMode: "contain"
                        }}
                           
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: "#161414",
                    borderRadius: 30,
                    marginLeft: "3.5%",
                    marginTop: "1.5%",
                    width: 50,
                    height: 50,
                    zIndex: 100
                }}
                >
                    <TouchableOpacity onPress={handleClickMessage}
                    >
                        <View style={{
                            backgroundColor: "red",
                            position: "absolute",
                            left: 10,
                            width: 20,
                            height: 18,
                            borderRadius: 25,
                            justifyContent: "center",
                            alignSelf: "center",
                            alignItems: "center",
                            marginLeft: 16,
                            marginTop: -6,
                            zIndex: 100

                        }}>
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontZize: 2
                            }}>
                                2
                            </Text>
                        </View>
                        <AntDesign name="message1" size={25} color="white" style={{
                            alignSelf: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            resizeMode: "contain"
                        }}
                            
                        />
                    </TouchableOpacity >
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    backgroundColor: "#161414",
                    borderRadius: 30,
                    marginLeft: "3.5%",
                    marginTop: "1.5%",
                    width: 50,
                    height: 50,
                    zIndex: 100
                }}>
                    <TouchableOpacity onPress={handleClickProfile}>
                        <Feather
                            name="user"
                            size={25}
                            color="white"
                            style={{
                                alignSelf: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                resizeMode: "contain"
                            }}
                            
                        />
                    </TouchableOpacity>
                </View>


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