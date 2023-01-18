//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import ProfileUtils from '../../components/ProfileUtils.js/ProfileUtils';
import Followers from '../../components/ProfileUtils.js/Followers';
import NavButtonProfile from '../../components/ProfileUtils.js/NavButtonProfile';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PostsUser from '../../components/ProfileUtils.js/PostsUser';




const Profile = () => {

    const navigation = useNavigation();
    const handleClickReturnHome = () => {
        console.log("clicked")
        navigation.navigate('HomeScreen');
    }
    const handleClickSettings = () => {
        console.log("clicked")
        navigation.navigate('Settings');
    }
    return (


        <ScrollView style={styles.container}>

            <View style={styles.container} >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#3D3939',
                        borderRadius: 30,
                        paddingBottom: 90,
                        marginTop: 50,

                    }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',

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
                                onPress={handleClickReturnHome}
                            >
                                <AntDesign name="arrowleft" size={28} color="#5F5858" style={{
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
                            backgroundColor: "#161414",
                            width: 50,
                            height: 50,
                            borderRadius: 30,
                            marginRight: "3.5%",
                            marginTop: "1.5%"
                        }}
                        >
                            <TouchableOpacity onPress={handleClickSettings}>
                                <Entypo name="dots-three-horizontal" size={28} color="#5F5858" style={{
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
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: -16,

                        }}>
                        <TouchableOpacity>
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
                                left: 65,
                                width: 16,
                                height: 16,
                                borderRadius: 25,
                                borderWidth: 2,
                                borderColor: "#000000",
                                justifyContent: "center",
                                alignSelf: "center",
                                alignItems: "center",
                                marginLeft: 16,
                                marginTop: 75,
                                zIndex: 100

                            }}>
                            </View>

                        </TouchableOpacity>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                            John Doe
                        </Text>
                        <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>
                            Full Stack Developer
                        </Text>

                    </View>
                </View>
            </View>
            <View >
                <ProfileUtils />
            </View>
            <View >
                <Followers />
            </View>
            <View >
                <NavButtonProfile />
            </View>

            <View style={{

                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: '#3D3939',
                borderRadius: 30,

            }}>
                <PostsUser />
            </View>
        </ScrollView >

    );

};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
    },
});

export default Profile;


