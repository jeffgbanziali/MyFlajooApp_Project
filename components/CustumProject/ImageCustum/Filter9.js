import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Valencia from '../FilterName/Valencia';

const Filter9 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Valencia on={filterName === 'valencia'}>
                    {{ uri: imageUri }}
                </Valencia>
            </Surface>
        </View>
    );
};

export default Filter9;
