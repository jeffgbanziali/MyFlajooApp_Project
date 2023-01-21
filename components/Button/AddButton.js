import { View, TouchableHighlight, Animated, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Entypo } from '@expo/vector-icons';


const buttonSize = new Animated.Value(1);
const mode = new Animated.Value(0);


const handlePress = () => {
    Animated.sequence([
        Animated.timing(buttonSize, {
            toValue: 0.95,
            duration: 200,
            useNativeDriver: false


        }),
        Animated.timing(buttonSize, {
            toValue: 1,
            useNativeDriver: false
        }),
        Animated.timing(mode, {
            toValue: mode._value === 0 ? 1 : 0,
            useNativeDriver: false
        })
    ]).start()
    console.log(mode._value)
}



const AddButton = () => {

    const sizeStyle = {
        transform: [{ scale: buttonSize }]
    }

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const messageY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, -60]
    });

    const messageX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, -100]
    });
    const boxY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, -20]
    });

    const boxX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, -150]
    });
    const circleY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, -90]
    });

    const circleX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, -40]
    });
    const commandY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, -180]
    });

    const commandX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    });



    return (
        <View style={{ position: 'absolute', alignItems: "center" }}>
            <Animated.View style={{ position: "absolute", left: messageX, top: messageY }}>
                <View style={styles.secondaryButton} >
                    <Feather name="home" size={24} color="black" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: boxX, top: boxY }}>
                <View style={styles.secondaryButton} >
                    <Feather name="box" size={24} color="black" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: circleX, top: circleY }}>
                <View style={styles.secondaryButton} >
                    <Feather name="circle" size={24} color="black" />
                </View>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: commandX, top: commandY }}>
                <View style={styles.secondaryButton} >
                    <Feather name="command" size={24} color="black" />
                </View>
            </Animated.View>
            <Animated.View style={[styles.button, sizeStyle]}>
                <TouchableHighlight underlayColor="blue" onPress={handlePress}>
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <Entypo name="plus" size={24} color="#FFFFFF" />
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>
        </View>

    )

}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#3B4FB8",
        width: 92,
        height: 92,
        borderRadius: 100,
        top: -30,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        borderWidth: 3,

    },
    secondaryButton: {
        position: "absolute",
        width: 48,
        height: 48,
        borderRadius: 30,
        textAlign: "center",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    }

})


export default AddButton;