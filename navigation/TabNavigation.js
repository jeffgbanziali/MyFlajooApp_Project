import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfileFriends from '../screens/ProfileFriends/ProfileFriends';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons, Entypo, MaterialIcons } from '@expo/vector-icons';
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
                tabBarActiveTintColor: "lightblue",
                tabBarStyle: {
                    backgroundColor: "black",
                    shadowColor: "#3D3939",
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home-filled" size={30} color={color} />
                    ),
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
                        <Feather name="search" color={color} size={30} onPress={() => {
                            navigation.navigate('Search');
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
                        <Entypo name="squared-plus" size={30} color={color}
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
                        <MaterialCommunityIcons name="movie-play-outline" size={30} color={color}
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
                        <Feather name="heart" color={color} size={30} />
                    ),
                    tabBarLabel: () => null,
                }}
            />

        </Tab.Navigator>

    );
};

export default TabNavigation;
