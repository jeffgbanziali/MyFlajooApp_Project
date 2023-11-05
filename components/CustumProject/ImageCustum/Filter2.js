import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Sepia from '../FilterName/Sepia';

const Filter2 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Sepia on={filterName === 'sepia'}>
                    {{ uri: imageUri }}
                </Sepia>
            </Surface>
        </View>
    );
};

export default Filter2;
