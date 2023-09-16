import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfileFriends from '../screens/ProfileFriends/ProfileFriends';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Réels from '../screens/Réels/Réels';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarStyle: {
                    backgroundColor: "black",
                    shadowColor: "gray",
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={35} color={color} />
                    ),
                    tabBarBadge: true,
                    tabBarBadgeStyle: {
                        backgroundColor: "blue",
                        borderRadius: 10,
                        marginRight: 100,
                    },
                    tabBarLabel: () => null,
                }}
            />

            <Tab.Screen
                name="Search"
                component={
                    () => null
                }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={35} onPress={() => {
                            navigation.navigate('Profile');
                        }} />
                    ),
                    tabBarLabel: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="AddPost"
                component={
                    () => null
                }
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="squared-plus" size={35} color={color}
                            onPress={() => {
                                navigation.navigate('NewPostScreen');
                            }}
                        />
                    ),
                    tabBarLabel: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Réels"
                component={Réels}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="movie-play-outline" size={35} color={color}
                        />
                    ),
                    tabBarLabel: () => null,
                    tabBarVisible: false,
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={ProfileFriends}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="heart" color={color} size={35} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

        </Tab.Navigator>

    );
};

export default TabNavigation;
