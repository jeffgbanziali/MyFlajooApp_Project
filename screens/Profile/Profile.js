//import liraries
import React, { } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';

// create a component
const Profile = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Avatar
                    rounded
                    size="large"
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
                    John Doe
                </Text>
                <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>
                    Full Stack Developer
                </Text>
                <Button
                    title="Edit Profile"
                    buttonStyle={{ marginTop: 20, backgroundColor: '#4388d6' }}
                />
            </View>
        </ScrollView>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
    },
});

//make this component available to the app
export default Profile;
