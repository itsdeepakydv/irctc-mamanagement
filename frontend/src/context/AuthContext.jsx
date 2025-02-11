import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(
        !!localStorage.getItem("token") // Check if user has a token stored
    );

    const login = (token) => {
        localStorage.setItem("token", token); // Save token
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token"); // Remove token
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}
