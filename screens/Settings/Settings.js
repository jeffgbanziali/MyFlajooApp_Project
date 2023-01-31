import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Logout from '../Profile/Logout'
import { Ionicons } from '@expo/vector-icons';


const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#000000',
            padding: 20,
            paddingTop: 50,
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,


        }}
        >
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <View
                    style={{

                        backgroundColor: '#454140',
                        shadowColor: '#000',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 20,

                    }}
                >
                    <Ionicons
                    style={{ marginLeft: 10 }}
                     name="notifications" size={24} color="black" />
                    <Text style={styles.text}>Activer les notifications</Text>

                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '#454140',
                        padding: 20,
                        paddingTop: 50,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: '#FFFFFF',
                        shadowColor: '#000',
                    }}
                >

                </View>
                <View
                    style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '#454140',
                        padding: 20,
                        paddingTop: 50,
                        borderRadius: 20,
                        borderWidth: 2,
                        borderColor: '#FFFFFF',
                        shadowColor: '#000',
                    }}
                >

                </View>
            </View>


            {/*<View style={styles.container}>
                <Text style={styles.text}>Activer les notifications</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value={isEnabled}
                />
</View>*/}
            <Logout />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,

    },
});




export default Settings