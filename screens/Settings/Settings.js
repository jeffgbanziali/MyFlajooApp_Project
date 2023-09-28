import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView } from 'react-native';
import Logout from '../Profile/Logout'
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';


const Settings = () => {

    const navigation = useNavigation();
    const handleClickReturnProfile = () => {
        console.log("clicked")
        navigation.navigate('Profile');
    }
    const handleClickAppli = () => {
        console.log("clicked")
        navigation.navigate('buttonning');
    }

    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#454140",
        }}
        >
            <View
                style={styles.container}

            >
                <View style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                }}
                >
                    <TouchableOpacity
                        onPress={handleClickReturnProfile}
                    >
                        <MaterialIcons name="arrow-back-ios" size={28} color="white" style={{
                            alignSelf: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            resizeMode: "contain"
                        }} />
                    </TouchableOpacity>
                </View>


                <Text
                    style={styles.text}>Settings</Text>
            </View>

            <ScrollView
                style={{
                    width: '100%',
                    height: '90%',
                }}
            >
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                >

                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <TouchableOpacity
                         style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                            onPress={handleClickAppli}
                        >
                            <Ionicons
                                name="ios-notifications-outline"
                                size={30}
                                color="white"
                            />
                            <Text
                                style={{
                                    marginLeft: 10,
                                    color: 'white',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Paramètres de l'application
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>
                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            height: '8%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Ionicons
                            name="ios-notifications-outline"
                            size={30}
                            color="white"

                        />
                        <Text
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Notifications
                        </Text>

                    </View>

                    <View
                        style={{
                            marginTop: 12,
                            width: '98%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 6,
                            backgroundColor: 'gray',
                            borderRadius: 10,
                        }}
                    >
                        <Logout />

                    </View>


                </View>

            </ScrollView >

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingBottom: 2,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,

    },
});




export default Settings