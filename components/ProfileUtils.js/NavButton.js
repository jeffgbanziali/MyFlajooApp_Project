import React from 'react';
import { View } from 'react-native';
import SwitchSelector from "react-native-switch-selector";

const NavButton = () => {
    const options = [
        { label: "01:00", value: "1", testID: "switch-one", accessibilityLabel: "switch-one" },
        { label: "01:30", value: "1.5", testID: "switch-one-thirty", accessibilityLabel: "switch-one-thirty" },
        { label: "02:00", value: "2", testID: "switch-two", accessibilityLabel: "switch-two" }
    ];

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -20,
        }}
        >


            <SwitchSelector
                initial={0}
                fontSize={16}
                fontStyle="normal"
                fontWeight={600}
                onPress={value => console.log(`Call onPress with value: ${value}`)}
                backgroundColor="#494747"
                textColor="#FFFFFF"
                selectedColor="#FFFFFF"
                buttonColor="#3B4FB8"
                borderColor="#494747"
                borderWidth={2}
                hasPadding
                options={[
                    { label: "Post ", value: "P" },
                    { label: "Video", value: "V" }
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                style={{
                    width: "90%",
                    borderRadius: 10,
                    margin: 20,
                    marginBottom: 20,
                }}
            />


        </View>
    );
}


export default NavButton;
