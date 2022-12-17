import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ Children }) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/Images/Background.jpg")} style={{ height: '100%' }} />
            <View style={{ position: "relative" }}>
                {Children}
            </View>
        </View>
    );
}



export default Background;
