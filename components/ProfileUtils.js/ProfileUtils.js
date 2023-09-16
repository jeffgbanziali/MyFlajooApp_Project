import { Divider } from '@rneui/base';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Followers from './Followers';

const ProfileUtils = () => {
    return (


        <View style={{
            position: 'relative',
            width: 371,
            height: 80,
            flex: 1,
            backgroundColor: '#494747',
            borderRadius: 30,
            marginTop: -40,
            display: 'flex',
            borderWidth: 1,
            borderColor: '#EFEAEA',
            borderStyle: 'solid',
            zIndex: 1,
            alignContent: 'center',
            alignSelf: 'center',

        }}>
            <Followers />
        </View>


    );
}

const styles = StyleSheet.create({})

export default ProfileUtils;
