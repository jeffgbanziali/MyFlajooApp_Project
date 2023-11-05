import React from 'react';
import { Surface } from 'gl-react-expo';
import { View } from 'react-native';
import Brightness from '../FilterName/Brightness';

const Filter = ({ imageUri, filterName }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', borderRadius: 100, justifyContent: 'center' }}>
            <Surface style={{ width: 100, height: 100 }}>
                <Brightness on={filterName === 'brightness'}>
                    {{ uri: imageUri }}
                </Brightness>
            </Surface>
        </View>
    );
};

export default Filter;
