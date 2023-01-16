import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, FlatList } from 'react-native';
import MessagesUser from '../../components/MessagesUser/MessagesUser';

export default function Chat() {
    const renderItem = ({ item }) => (
       <MessagesUser message={item}
        />

    );


    return (
        <FlatList
            data={Messages}
            renderItem={renderItem}
            keyExtractor={item => item.id}

        />
    );
}




const Messages = [
    {
        id: 1,
        username: 'Vadim',
        message: 'Hello',
    },
    {
        id: 2,
        username: 'Vadim',
        message: 'Hello',
    },
]