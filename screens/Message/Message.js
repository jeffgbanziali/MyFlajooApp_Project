import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Chat from './Chat'
import ChatList from './ChatList';


const Message = () => {
  const [username, setUsername] = useState('Jeff');


  const saveUsername = (name) => {
    setUsername(name);
  }
  if (username === "") {
    return <ChatList saveUsername={saveUsername} />;
  }

  return (
    <View style={{
      flex: 1,
      marginTop: 20,
    }}
    >
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
      }}
      >
        {username}
      </Text>
      <Chat username={username} />
    </View>

  )
}

export default Message





