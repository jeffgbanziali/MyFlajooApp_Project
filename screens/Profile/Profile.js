//import liraries
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProfileUtils from '../../components/ProfileUtils.js/ProfileUtils';
import Followers from '../../components/ProfileUtils.js/Followers';
import NavButtonProfile from '../../components/ProfileUtils.js/NavButtonProfile';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PostsUser from '../../components/ProfileUtils.js/PostsUser';
import { UidContext } from '../../components/Context/AppContext';
import UploadImg from '../../components/ProfileUtils.js/UploadImg';
import { updateBio } from '../../actions/user.action';



const Profile = () => {

    const { uid } = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    const [bio, setBio] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const dispatch = useDispatch();

    const [image, setImage] = useState(null);

    const handleImageChange = (newImage) => {
        setImage(newImage);
        console.log(image);
    }
    const handleUpdate = () => {
        if (bio !== userData.bio) {
            dispatch(updateBio(userData._id, bio));
        }
        setUpdateForm(false);

    }

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

            {
                uid ? (
                    <>
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
                                        <Image source={{ uri: userData.profile }}
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
                                        <UploadImg image={image} onChange={handleImageChange} />

                                    </TouchableOpacity>

                                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                                        {userData.pseudo}
                                    </Text>

                                    <View>
                                        <Text style={{ fontSize: 15, marginTop: 10, color: "#000000" }}>
                                            bio
                                        </Text>
                                        {
                                            updateForm === false && (
                                                <>
                                                    <View>
                                                        <Pressable
                                                            onPress={() => setUpdateForm(!updateForm)}>
                                                            <Text
                                                                style={{ fontSize: 15, marginTop: 10, color: "#FFFFFF" }}
                                                            >
                                                                {userData.bio}
                                                            </Text>
                                                        </Pressable>
                                                    </View>
                                                    <Pressable
                                                        onPress={() => setUpdateForm(!updateForm)}
                                                    >
                                                        <Text>
                                                            modifier bio
                                                        </Text>
                                                    </Pressable>
                                                </>
                                            )}
                                        {
                                            updateForm && (
                                                <>
                                                    <TextInput
                                                        style={{ fontSize: 15, marginTop: 10, color: "#000000", backgroundColor: "#FFFFFF", }}
                                                        multiline={true}
                                                        defaultValue={userData.bio}
                                                        onChangeText={(text) => setBio(text)}
                                                        autoCapitalize="none"
                                                        autoCorrect={false}
                                                        keyboardType='none'
                                                    />
                                                    <Pressable
                                                        onPress={handleUpdate}
                                                    >
                                                        <Text>
                                                            valider

                                                        </Text>
                                                    </Pressable>


                                                </>
                                            )
                                        }
                                    </View>



                                </View>
                                <View>
                                    <Text>
                                        Membre depuis le : {userData.createdAt}
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
                    </>
                ) : (
                    <>
                        <View style={styles.container} >
                            <Text>
                                Loading...
                            </Text>
                        </View>
                    </>
                )
            }


        </ScrollView >

    );

};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
    },
});

export default Profile;


