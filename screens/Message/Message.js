import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Chat from './Chat'
import ChatList from './ChatList';
import { Avatar } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 


const Message = () => {
  const [username, setUsername] = useState('Jeff');


  const saveUsername = (name) => {
    setUsername(name);
  }
  if (username === "") {
    return <ChatList saveUsername={saveUsername} />;
  }
  const handleClickReturnHome = () => {
    console.log("clicked")
    navigation.navigate('HomeScreen');
  }

  return (
    <>
      <View style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: '#2C2828',
      }}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
          marginTop: 20

        }}
        >
          <View style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: "#161414",
            width: 50,
            height: 50,
            borderRadius: 30,
            marginLeft: "3.5%",
            marginTop: "1.5%"
          }}
          >
            <TouchableOpacity
              onPress={handleClickReturnHome}
            >
              <AntDesign name="arrowleft" size={28} color="#5F5858" style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: "contain"
              }} />
            </TouchableOpacity>
          </View>


          <Text style={{
            fontWeight: 'bold',
            fontSize: 26,
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            color: '#FFFFFF',
          }}>
            Messages
          </Text>
          <View style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: "#D9D9D9",
            width: 50,
            height: 50,
            borderRadius: 30,
            marginLeft: "11.5%",
            marginTop: "1.5%"
          }}
          >
            <TouchableOpacity
              onPress={handleClickReturnHome}
            >
              <Ionicons name="ios-call" size={28} color="#000000" style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: "contain"
              }} />
            </TouchableOpacity>
          </View>
          <View style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: "#D9D9D9",
            width: 50,
            height: 50,
            borderRadius: 30,
            marginRight: "3.5%",
            marginTop: "1.5%"
          }}
          >
            <TouchableOpacity
              onPress={handleClickReturnHome}
            >
              <Ionicons name="videocam" size={28} color="#000000" style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: "contain"
              }} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Avatar
            size="large"
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }} />
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -40,
            marginLeft: 10,
            color: '#FFFFFF',

          }}
          >
            {username}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              marginLeft: -35,
              marginTop: 10,
              color: '#09C03C',
            }}
          >
            Online
          </Text>
        </View>

        <Chat username={username} />
      </View>



    </>

  )
}

export default Message





