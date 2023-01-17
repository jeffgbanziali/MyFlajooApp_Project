import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';

const MessagesUser = ({ message, username }) => {
    return (
        <View style={{
            alignSelf: username === message.username ? 'flex-end' : 'flex-start',
            marginTop: 30,
            marginRight: 10,
            marginLeft: 10,
            flexDirection: username === message.username ? 'row' : 'row-reverse'
        }}
        >
            <Text style={{
                fontSize:
                    16, backgroundColor: username === message.username ? '#6373C8' : '#000000',
                color: 'white',
                padding: 10,
                borderRadius: 10,
            }}
            >{message.content} </Text>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 14,
                color: 'gray',
                marginLeft: username === message.username ? 5 : 0,
                marginRight: username === message.username ? 0 : 5,
            }}
            >{message.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MessagesUser;
