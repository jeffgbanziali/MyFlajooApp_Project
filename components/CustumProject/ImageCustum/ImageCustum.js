// FilterEffects.js
import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Valencia from '../FilterName/Valencia';
import Brannan from '../FilterName/Brannan';
import GLImage from "./GLImage";
import Grayscale from '../FilterName/GrayScale';
import { Surface } from 'gl-react-expo';



const ImageCustum = ({ onSelectEffect, source }) => {
    return (

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100
                }}

                onPress={() => onSelectEffect("grayscale")}>
                <Surface>
                    <Grayscale
                        title='grayscale'
                        on={true}>
                        {{ uri: source }}
                    </Grayscale>
                </Surface>
                <Text>Grayscale</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100
                }}
                onPress={() => onSelectEffect("sepia")}>
                <Text>Sepia</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100
                }}
                onPress={() => onSelectEffect("temperature")}>
                <Text>Temperature</Text>
            </TouchableOpacity>
        </View>

    );
}

export default ImageCustum;
