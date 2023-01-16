import React from 'react';
import { Text } from 'react-native';
import {View, StyleSheet} from 'react-native';

const MessagesUser = ({message}) => {
    return (
        <View>
            <Text>{message.message} </Text>
            <Text>{message.username}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default MessagesUser;
