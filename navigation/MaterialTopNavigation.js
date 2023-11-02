import React from "react";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import NewPostScreen from "../screens/NewPostScreen/NewPostScreen";

const Tab = createMaterialTopTabNavigator();

const MaterialTopNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
        </Tab.Navigator>
    );
}

export default MaterialTopNavigation;