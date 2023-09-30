import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { darkRose } from '../../components/Button/Constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UidContext } from '../../components/Context/AppContext'
import { Image } from 'react-native'

const SignInScreen = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSignIn = async () => {
    const data = { email, password }
    try {
      const response = await axios.post(
        'http://192.168.0.14:3000/api/user/login',
        data,

        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if (response.status === 200) {
        const { user } = response.data
        if (user) {
          //await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('user', user)
          console.log('Token saved')
        }
        console.log(user)
        alert('User logged in successfully')
        console.log(response)
        navigation.navigate("HomeScreen");
      } else {
        if (
          response.data.errors.email !== '' ||
          response.data.errors.password !== ''
        ) {
          setErrors(response.data.errors)
          console.log(response.data.errors)
        }
        alert('An error occurred')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >

        <View style={{
          width: 200,
          height: 120,
          padding: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image
            style={{
              width: "100%",
              height: "100%",

            }}
            source={require("../../assets/Logos/my_flajooo.png")} />
        </View>

        <View
          style={{
            overflow: 'hidden',
            width: 400,
            height: 400,
            borderRadius: 20,
            backgroundColor: '#3D3939',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}
        >
          <View>
            <Text style={styles.title}>Sign In</Text>
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor='gray'
              onChangeText={text => setEmail(text)}
              value={email}
              autoCapitalize='none'
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholderTextColor='gray'
              secureTextEntry={true}
              placeholder='Password'
              onChangeText={text => setPassword(text)}
              value={password}
              autoCapitalize='none'
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonTitle}>Sign in</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
              <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text
                  onPress={() => navigation.navigate('Signup')}
                  style={styles.footerLink}
                >
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    color: "white",
    marginBottom: 30,
    marginTop: 20
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    height: 48,
    borderRadius: 10,
    borderColor: '#2e2e2d',
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
    width: 300
  },
  button: {
    backgroundColor: darkRose,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    width: 100,
    height: 48,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  footerText: {
    fontSize: 16,
    color: 'white'
  },
  footerLink: {
    color: "blue",
    fontWeight: '300',
    fontSize: 16
  }
})
export default SignInScreen
