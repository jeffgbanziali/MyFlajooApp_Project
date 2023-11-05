import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Grayscale from '../FilterName/GrayScale';

const Filter3 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Grayscale on={filterName === 'grayscale'}>
                    {{ uri: imageUri }}
                </Grayscale>
            </Surface>
        </View>
    );
};

export default Filter3;
