import React, { useState, createContext } from 'react';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);

    const login = (value) => {
        window.localStorage.setItem('token', value.token);
        window.localStorage.setItem('user', JSON.stringify(value.user));
        setToken(value.token);
        setUser(value.user);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
