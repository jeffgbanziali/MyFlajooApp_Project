import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Favorite from '../screens/Favorite/Favorite';
import Settings from '../screens/Settings/Settings';
import StartPage from '../screens/StartPage/StartPage';
import AddButton from '../components/Button/AddButton';


const TabNavigation = createMaterialBottomTabNavigator(
    {

        tabBarOptions: {
            activeTintColor: "red",
            inactiveTintColor: "black",
            showLabel: false,
            style: {
                backgroundColor: "white",
                borderTopWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
                height: 60,
                zIndex: 100
            }
        }
    }, {
    home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
            ),
        }
    },
    Menu: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
            ),
        }
    },
    AddButton: {
        screen: AddButton,
        navigationOptions: {
            tabBarIcon: ({ color }) => (
                <AddButton />
            ),
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
            ),
        }
    },
    Start: {
        screen: StartPage,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
                <Feather name="home" color={color} size={26} />
            ),
        }
    },

}


);



export default TabNavigation;