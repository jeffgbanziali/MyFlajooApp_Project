import React, { createContext } from 'react';

export const UidContext = createContext();



const UidContextProvider = (props) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        token: null,
    });

    const login = (token) => {
        setUser({
            isLoggedIn: true,
            token,
        });
    };

    const logout = () => {
        setUser({
            isLoggedIn: false,
            token: null,
        });
    };


    return (
        <UidContext.Provider
            value={{
                user,
                login,
                logout,
            }}
            
        >
            {props.children}
        </UidContext.Provider>
    );
};

export default UidContextProvider;