import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen'
import StartPage from '../screens/StartPage/StartPage'
import { NavigationContainer } from '@react-navigation/native'
import AddButton from '../components/Button/AddButton'
import Feather from 'react-native-vector-icons/Feather';


const Tab = createBottomTabNavigator()

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                barStyle={{ backgroundColor: "red" }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <Feather name="home" color='red' size={26} />
                        ),
                    }}

                />
                <Tab.Screen
                    name="Start"
                    component={StartPage}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <Feather name="home" color='red' size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddButton}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <AddButton />
                        )


                    }}
                />
                <Tab.Screen
                    name="Signup"
                    component={SignUpScreen}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <Feather name="home" color='red' size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Signin"
                    component={SignInScreen}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <Feather name="home" color='red' size={26} />
                        ),
                    }}

                />

            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default TabNavigation