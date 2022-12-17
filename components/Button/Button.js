import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ bgColor, buttonLabel, textColor, Press }) => {
    return (
        < TouchableOpacity
        onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 100,
                alignItems: 'center',
                width: 350,
                paddingVertical: 15,
                marginVertical: 10
            }}>
            <Text style={{
                color: textColor,
                fontSize: 22,
                fontWeight: 'bold'
            }} >
                {buttonLabel}
            </Text>

        </TouchableOpacity>


    );
}


export default Button;
