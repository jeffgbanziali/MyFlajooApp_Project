import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import ProfileFriendsUtils from '../../components/ProfileFriendsUtils/ProfileFriendsUtils'
import FollowHandler from '../../components/ProfileUtils.js/FollowHandler'

const ProfileFriends = () => {
  const navigation = useNavigation()
  const handleClickReturnHome = () => {
    console.log('clicked')
    navigation.navigate('HomeScreen')
  }
  const handleClickSettings = () => {
    console.log('clicked')
    navigation.navigate('Settings')
  }
  return (
    <ScrollView style={styles.container}>
      <>
        <View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#3D3939',
              borderRadius: 30,
              paddingBottom: 50,
              marginTop: 50
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  backgroundColor: '#161414',
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginLeft: '3.5%',
                  marginTop: '1.5%'
                }}
              >
                <TouchableOpacity onPress={handleClickReturnHome}>
                  <AntDesign
                    name='arrowleft'
                    size={28}
                    color='#5F5858'
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
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  marginRight: '3.5%',
                  marginTop: '1.5%'
                }}
              >
                <TouchableOpacity onPress={handleClickSettings}>
                  <Entypo
                    name='dots-three-horizontal'
                    size={28}
                    color='#5F5858'
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

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: "100%",
                marginTop: -16
              }}
            >
              <TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png'
                  }}
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: 100,
                    objectFit: 'cover',
                    borderWidth: 5,
                    borderColor: 'red'
                  }}
                />

                <View
                  style={{
                    backgroundColor: '#09C03C',
                    position: 'absolute',
                    left: 65,
                    width: 20,
                    height: 20,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: '#000000',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginLeft: 80,
                    marginTop: 100,
                    zIndex: 100
                  }}
                ></View>
              </TouchableOpacity>

              <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 10 }}>
                Jeff FLaj
              </Text>
              <Text style={{ fontSize: 20, color: '#5F5858' }}>@Koukouda</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                  width: "50%",
                }}
              >
                <Text style={{ fontSize: 18, color: 'gray' }}>
                  Bonjoirojsidjnskdnshgussrf
                  fgsydsgdiksbuxgfsdvsdkusgb
                  ezetzgehzjsbjksdksn snd
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                width: '100%',
              }}
            >
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    color: 'white',
                  }}
                >
                  Follow by
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <Image source={{
                    uri: 'https://i.pinimg.com/originals/53/d8/07/53d807f07a035d81ce767abd44c98e13.png'
                  }}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                      objectFit: 'cover',
                      borderWidth: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      marginLeft: 10,
                      fontWeight: 'normal',
                      color: 'gray',
                    }}
                  >
                    @Ferran_Torres
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: '100%',

              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: 50,
                  width: '65%',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flex: 1
                  }}
                >
                  <View>
                    <FollowHandler
                      idToFollow={'60f0b5b0b9c5b40015b5b0c7'}
                      type={'card'}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: 'blue',
                      borderRadius: 10,
                      height: 50,
                      padding: 2,
                      width: 150,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        fontWeight: 'semibold',
                        justifyContent: 'center',
                        fontSize: 25,
                        color: 'white'
                      }}
                    >
                      Chating
                    </Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </View>
        <View>
          <ProfileFriendsUtils />
        </View>
        <View></View>
        <View></View>
      </>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2828'
  }
})

export default ProfileFriends
