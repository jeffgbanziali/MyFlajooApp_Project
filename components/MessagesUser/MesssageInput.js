import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

const MesssageInput = ({ username, socket }) => {
    const [content, setContent] = useState('');
    const [height, setHeight] = useState(40)
    const onSend = () => {
        if (content.trim() === '') {
            return;
        }

        const message = {
            room: 'React Jeff',
            username,
            content: content.trim(),
            time: new Date().getTime(),
        }
        socket.emit('send_message', message);
        setContent('');
    }
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
           
            width: "100% ",
            height: "100% ",
        }}
        >
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                onContentSizeChange={(e) => setHeight(e.nativeEvent.contentSize.height)}
                style={{
                    flex: 1,
                    borderColor: '#D9D9D9',
                    borderWidth: 2,
                    borderRadius: 30,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginRight: 10,
                    height: Math.max(40, height),

                }}
                placeholder="Message..."
                placeholderTextColor="#787373"
                backgroundColor="#D9D9D9"
                multiline
            />
            <Pressable
                disabled={content === ''}
                onPress={onSend}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 30,
                    justifyContent: 'center',
                    backgroundColor: '#3B4FB8',

                }}

            >
                <FontAwesome
                    name="send"
                    size={24}
                    color={
                        content === '' ? '#494747' : '#FFFFFF'
                    }
                    style={{
                        textAlign: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        alignContent: 'center',
                        marginRight: 4,

                    }}

                />
            </Pressable>

        </View>
    )
}

export default MesssageInput
