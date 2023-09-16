import React, { useRef, useState } from 'react'; // Importez useRef depuis react
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView
} from 'react-native'
import Header from '../../components/homepage/Header'
import Stories from '../../components/homepage/Stories/Stories'
import Thread from '../../components/Thread/Thread'

const HomeScreen = () => {
    const [borderColor, setBorderColor] = useState('gray');
    const scrollViewRef = useRef(null);
    const threshold = 1;

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <Header borderBottomColor={borderColor} />
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={(event) => {
                        setBorderColor(
                            event.nativeEvent.contentOffset.y > threshold ? 'gray' : '#2C2828'
                        );
                    }}
                >
                    <Stories />
                    <Thread />
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C2828',
        flex: 1
    },
})

export default HomeScreen
