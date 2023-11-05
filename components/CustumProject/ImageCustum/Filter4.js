import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Amaro from '../FilterName/Amaro';

const Filter4 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Amaro on={filterName === 'amaro'}>
                    {{ uri: imageUri }}
                </Amaro>
            </Surface>
        </View>
    );
};

export default Filter4;
