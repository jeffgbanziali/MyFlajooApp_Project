import { createContext, useState, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
    user: (AsyncStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
};

export const UidContext = createContext(null);

export const UidContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    useEffect(() => {
        AsyncStorage.setItem('user', (state.uid));
    }, [state.user]);

    return (
        <UidContext.Provider
            value={{
                uid: state.uid,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </UidContext.Provider>
    );
};
