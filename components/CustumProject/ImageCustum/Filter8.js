import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Temperature from '../FilterName/Temperature';

const Filter8 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Temperature on={filterName === 'temperature'}>
                    {{ uri: imageUri }}
                </Temperature>
            </Surface>
        </View>
    );
};

export default Filter8;
