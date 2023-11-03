import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import StoriesViewUser from './StoriesViewUser';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 300;

const BottomSheetStories = forwardRef(({ children }, ref) => {
    const translateY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination) => {
        'worklet';
        active.value = destination !== 0;

        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
        return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 3) {
                scrollTo(0);
            } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                scrollTo(MAX_TRANSLATE_Y);
            }
        });

    const reBottomSheet = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        );

        return {
            borderRadius,
            transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[reBottomSheet]}>
                <View style={{
                    height: SCREEN_HEIGHT,
                    width: '100%',
                    backgroundColor: "gray",
                    top: SCREEN_HEIGHT,
                    borderRadius: 25,
                    bottom: 0,
                }}>
                    <View style={{
                        width: 75,
                        height: 6,
                        alignSelf: 'center',
                        backgroundColor: 'black',
                        marginTop: 20,
                        borderRadius: 2
                    }} />
                    {children}
                    <StoriesViewUser />
                </View>
            </Animated.View>
        </GestureDetector>
    );
});

export default BottomSheetStories;
