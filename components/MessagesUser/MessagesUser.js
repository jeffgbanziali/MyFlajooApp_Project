import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';

const MessagesUser = ({ own }) => {
    return (
        <View style={own ? styles.messageOwn : styles.messageOther}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Image source={require('../../assets/Images/woman-gdc9219422_1920.jpg')}
                    style={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,
                        objectfit: 'cover',
                        marginRight: 10,
                    }}

                />

                <Text style={own ? styles.textMessageOwn : styles.textMessageOther}
                >Hello my guys </Text>
            </View>
            <View>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'gray',
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,

                }}
                >
                    1 min ago

                </Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    messageOwn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
    },
    messageOther: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 30,
        marginRight: 10,
        marginLeft: 10,
    },
    textMessageOwn: {
        fontSize: 16,
        backgroundColor: '#6373C8',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
    },
    textMessageOther: {
        fontSize: 16,
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
    },

})


export default MessagesUser;
