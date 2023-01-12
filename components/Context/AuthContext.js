import React, { createContext } from 'react';
import { View, Text } from 'react-native'

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value="test value">
            {children}
        </AuthContext.Provider>

    )
}

export default AuthProvider;