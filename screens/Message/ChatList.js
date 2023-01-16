import React, { useState } from 'react';

import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';

const ChatList = ({saveUsername}) => {
    const [username, setUsername] = useState('')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>
                ChatList
            </Text>
            <Text>Bienvenue</Text>
            <TextInput style={{
                width: 200,
                height: 40,
                borderColor: 'gray',
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,

            }} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
            <Pressable style={{
                backgroundColor: 'blue',
                width: 200,
                height: 40,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
            }}
            onPress={() => saveUsername(username)}
            >
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                }}
                >Go to Chat</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ChatList;
