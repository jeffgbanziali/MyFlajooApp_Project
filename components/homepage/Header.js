import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { AntDesign } from '@expo/vector-icons'

const Header = () => {
  const navigation = useNavigation(false)
  const handleClickProfile = () => {
    console.log('clicked')
    navigation.navigate('Profile')
  }
  const handleClickMessage = () => {
    console.log('clicked')
    navigation.navigate('Messages')
  }
  const handleClickNotifications = () => {
    console.log('clicked')
    navigation.navigate('Notifications')
  }
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity
        style={{
          width: 100,
          height: 50
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain'
          }}
          source={require('../../assets/Logos/my_flajoo.png')}
        />
      </TouchableOpacity>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#161414',
            borderRadius: 30,
            marginTop: '1.5%',
            width: 50,
            height: 50,
            zIndex: 100
          }}
        >
          <TouchableOpacity onPress={handleClickNotifications}>
            <Feather
              name='bell'
              size={22}
              color='white'
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#161414',
            borderRadius: 30,
            marginTop: '1.5%',
            width: 50,
            height: 50,
            zIndex: 100
          }}
        >
          <TouchableOpacity onPress={handleClickMessage}>
            <View
              style={{
                backgroundColor: 'red',
                position: 'absolute',
                left: 10,
                width: 20,
                height: 18,
                borderRadius: 25,
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                marginLeft: 16,
                marginTop: -6,
                zIndex: 100
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontZize: "8px"
                }}
              >
                2
              </Text>
            </View>
            <AntDesign
              name='message1'
              size={22}
              color='white'
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            backgroundColor: '#161414',
            borderRadius: 30,
            marginTop: '1.5%',
            width: 50,
            height: 50,
            zIndex: 100
          }}
        >
          <TouchableOpacity onPress={handleClickProfile}>
            <Feather
              name='user'
              size={22}
              color='white'
              style={{
                alignSelf: 'center',
                alignContent: 'center',
                alignItems: 'center',
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header
