import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Saturation from '../FilterName/Saturation';

const Filter7 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Saturation on={filterName === 'saturation'}>
                    {{ uri: imageUri }}
                </Saturation>
            </Surface>
        </View>
    );
};

export default Filter7;
