import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import AddButton from '../components/Button/AddButton'
import Feather from 'react-native-vector-icons/Feather';
import Message from '../screens/Message/Message'
import NewPostScreen from '../screens/NewPostScreen/NewPostScreen'


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
                    component={NewPostScreen}
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
                    component={Message}
                    options={{
                        tabBarLabel: "Accueil",
                        tabBarIcon: () => (
                            <Feather name="home" color='red' size={26} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Messages"
                    component={Message}
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