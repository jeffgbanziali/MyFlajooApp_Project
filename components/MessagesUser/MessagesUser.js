import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';

const MessagesUser = ({ message, username }) => {
    return (
        <View style={{
            alignSelf: username === message.username ? 'flex-end' : 'flex-start',
            marginTop: 10,
        }}
        >
            <Text style={{
                fontSize:
                    20, backgroundColor: username === message.username ? '#6373C8' : '#D9D9D9',
                color: 'white',
                padding: 10,
                borderRadius: 10,
            }}
            >{message.content} </Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: 'gray'
            }}
            >{message.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MessagesUser;
