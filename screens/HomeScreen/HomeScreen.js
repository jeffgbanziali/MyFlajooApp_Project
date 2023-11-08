import React, { useState, useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Animated,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import Header from '../../components/homepage/Header';
import Stories from '../../components/homepage/Stories/Stories';
import Thread from '../../components/Thread/Thread';
import { useDarkMode } from '../../components/Context/AppContext';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const HomeScreen = () => {
    const { isDarkMode } = useDarkMode();
    const bottomTabHeight = useBottomTabBarHeight();
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    backgroundColor: isDarkMode ? "#171717" : "white",
                    height: windowHeight - bottomTabHeight,
                    flex: 1,
                }}
            >
                <SafeAreaView
                    style={{
                        backgroundColor: isDarkMode ? "#171717" : "white",
                        height: "100%",
                    }
                    }
                >
                    <ScrollView>
                        <Header />
                        <Stories />
                        <Thread />
                    </ScrollView>
                </SafeAreaView>
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
