import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MessagesUser from '../../components/MessagesUser/MessagesUser';
import MesssageInput from '../../components/MessagesUser/MesssageInput';
import { KeyboardAvoidingView } from 'react-native';
import  io  from 'socket.io-client';



//Socket.io configation 


const socket = io('http://192.168.0.34:5000');





export default function Chat({ username }) {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Roommm connection
        socket.emit('join_room', "React jeff");
        // Message config  sending + recptions
        socket.on('new_message', (data) => {
            console.log("new message receive", data);
            setMessages((current) => {
                return [...current, data];
            });
        });
    }, [])

    const renderItem = ({ item }) => (
        <MessagesUser username={username} message={item}
        />

    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "null"}
            style={{
                flex: 1,
                paddingBottom: 10,
            }}
        >
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
            <MesssageInput username={username} socket={socket} />
        </KeyboardAvoidingView>


    );
}

