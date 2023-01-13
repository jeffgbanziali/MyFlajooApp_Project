//import liraries
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import ProfileUtils from '../../components/ProfileUtils.js/ProfileUtils';
import Followers from '../../components/ProfileUtils.js/Followers';
import NavButton from '../../components/ProfileUtils.js/NavButton';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const Profile = () => {
    const navigation = useNavigation(false);
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
            <View >
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
                            <Avatar
                                size="xlarge"
                                rounded
                                source={{
                                    uri:
                                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                }} />

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
                <NavButton />
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
