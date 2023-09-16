import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Logout from '../Profile/Logout'
import { Ionicons } from '@expo/vector-icons';


const Settings = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#454140",
        }}
        >
            <View
                style={styles.container}

            >
                <Text
                    style={styles.text}>Settings</Text>
            </View>

            <View
                style={{
                    marginTop: 10,
                    width: '100%',
                    height: '90%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                }}
            >
                <View
                    style={{
                        marginTop: 12,
                        width: '98%',
                        height: '6%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: 'red',
                        borderRadius: 10,
                    }}
                >
                    <Ionicons
                        name="ios-notifications-outline"
                        size={30}
                        color="white"

                    />
                    <Text
                        style={{
                            marginLeft: 10,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}
                    >
                        Notifications
                    </Text>

                </View>
                <View
                    style={{
                        marginTop: 12,
                        width: '98%',
                        height: '6%',
                        backgroundColor: 'red',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}
                >

                </View>
                <View
                    style={{
                        marginTop: 12,
                        width: '98%',
                        height: '6%',
                        backgroundColor: 'red',
                        alignItems: 'center',
                        borderRadius: 10,
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

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,

    },
});




export default Settings