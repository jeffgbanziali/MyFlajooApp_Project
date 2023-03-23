import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { USER } from '../../Data/Users'
import MyStory from './MyStory'

const Stories = () => {
  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: '#000',
        height: 160,
        width: '100%',
        resizeMode: 'cover'
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          alignSelf: 'center'
        }}
      >
        <MyStory />
        {USER.map((story, index) => (
          <View>
            <TouchableOpacity>
              <View>
                <Image
                  source={{ uri: story.image }}
                  style={{
                    width: 100,
                    height: 140,
                    borderRadius: 10,
                    borderWidth: 3,
                    borderColor: '#494747',
                    marginLeft: 10,
                    resizeMode: 'cover'
                  }}
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -80
              }}
            >
              <Image
                key={index}
                source={{ uri: story.image }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 30,
                  borderWidth: 3,
                  borderColor: '#3B4FB8',
                  marginLeft: 10,
                  resizeMode: 'cover',
                  position: 'relative'
                }}
              />
              <View
                style={{
                  borderRadius: 30,
                  marginLeft: 60,
                  marginTop: -28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  resizeMode: 'cover'
                }}
              >
                <View
                  style={{
                    backgroundColor: '#09C03C',
                    width: 12,
                    height: 12,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: '#000000',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginLeft: -8,
                    marginTop: 7,
                    zIndex: 100
                  }}
                ></View>
              </View>
              <View
                style={{
                  backgroundColor: '#787373',
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  width: 95,
                  height: 36,
                  marginLeft: 10,
                  marginTop: 9,
                  alignItems: 'center',
                  justifyContent: 'center',
                  resizeMode: 'cover'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 12,
                    fontWeight: '600',
                    marginTop: 10
                  }}
                >
                  {story.user.length > 11
                    ? story.user.slice(0, 10).toLowerCase() + '...'
                    : story.user.toLowerCase()}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Stories
