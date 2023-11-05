import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Brannan from '../FilterName/Brannan';

const Filter5 = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Brannan on={filterName === 'brannan'}>
                    {{ uri: imageUri }}
                </Brannan>
            </Surface>
        </View>
    );
};

export default Filter5;
