//import liraries
import React, { } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <View
                style={{
                    backgroundColor: '#3D3939',
                    borderRadius: 30,
                    paddingBottom: 90,
                    marginTop: 50,

                }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 18,
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
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <View style={{
                    width: 371,
                    height: 84,
                    backgroundColor: '#494747',
                    borderRadius: 30,
                    paddingBottom: 90,
                    marginTop: -50,
                    borderWidth: 1,
                    borderColor: '#EFEAEA',
                    borderStyle: 'solid',

                }}>
                    <View>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',

                        }}>
                            Bonjour
                        </Text>
                    </View>
                </View>
            </View>


        </ScrollView>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
    },
});

//make this component available to the app
export default Profile;
