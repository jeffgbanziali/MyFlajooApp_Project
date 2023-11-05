import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Contrast from '../FilterName/Contrast';

const Filter6 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Contrast on={filterName === 'contrast'}>
                    {{ uri: imageUri }}
                </Contrast>
            </Surface>
        </View>
    );
};

export default Filter6;
