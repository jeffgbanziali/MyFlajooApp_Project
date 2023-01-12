import { ButtonGroup } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

const NavButton = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <View>
            <ButtonGroup
                buttons={['Post', 'Video']}
                selectedIndex={selectedIndex}
                onPress={(value) => {
                    setSelectedIndex(value);
                }}
                containerStyle={{ 
                    marginBottom: 20,
                    borderRadius: 20, 
                    backgroundColor: '#3D3939',   }}
            />
        </View>
    );
}


export default NavButton;
