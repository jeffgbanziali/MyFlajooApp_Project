import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import MessagesUser from '../../components/MessagesUser/MessagesUser';
import MesssageInput from '../../components/MessagesUser/MesssageInput';
import { KeyboardAvoidingView } from 'react-native';
import axios from 'axios';




export default function Chat() {
    const [currentChat, setCurrentChat] = useState(null); 
    const [chat, setChat] = useState([]);


    useEffect(() => {
        console.log("Current Chat ID:", currentChat?._id);
        const getMessages = async () => {
          try {
            const response = await axios.get(
              `http://localhost:4000/api/message/` + currentChat?._id
            );
            console.log("Messages Response:", response.data);
            setChat(response.data);
          } catch (err) {
            console.error(err);
          }
        };
        getMessages();
      }, [currentChat]);


    return (
        <>
           <View>
            <Text>bOnjour</Text>
           </View>
        </>



    );
}
