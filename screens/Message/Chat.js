import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MessagesUser from '../../components/MessagesUser/MessagesUser';
import MesssageInput from '../../components/MessagesUser/MesssageInput';
import { KeyboardAvoidingView } from 'react-native';
//import io from 'socket.io-client';



//Socket.io configation 


//const socket = io('http://192.168.0.34:5000');





export default function Chat() {


    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "null"}
                style={{
                    flex: 1,
                    paddingBottom: 10,
                    backgroundColor: 'white',
                    marginTop: 40,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,

                }}
            >
                <View>
                    <MessagesUser  />
                    <MessagesUser own={true} />
                    <MessagesUser />
                </View>

            </KeyboardAvoidingView>
            <View style={{
                position: 'absolute',
                bottom: 10,
                width: '100%',
            }}
            >
                <MesssageInput />
            </View>
        </>



    );
}

const Messages = [
    {
        id: 1,
        username: 'Jeff',
        content: 'Hello my bro how are you ?',
        emoji: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    },
    {
        id: 2,
        username: 'Madame',
        content: 'Hello my guy i"m fine ',
        emoji: 'https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png',
    },

]