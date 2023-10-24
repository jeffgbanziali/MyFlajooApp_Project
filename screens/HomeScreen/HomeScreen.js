import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Animated,
} from 'react-native';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories/Stories';
import Thread from '../../components/Thread/Thread';
import { useDarkMode } from '../../components/Context/AppContext';

const HomeScreen = () => {
    const { isDarkMode } = useDarkMode();


    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    backgroundColor: isDarkMode ? "#171717" : "white",

                    flex: 1,
                }}
            >
                <View
                    style={{
                        backgroundColor: isDarkMode ? "#171717" : "white",
                        height: "100%",
                        marginTop: "14%"
                    }
                    }
                >
                    <ScrollView>
                        <Header />
                        <Stories />
                        <Thread />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        zIndex: 1,

        marginTop: 10,
    },
});

export default HomeScreen;
