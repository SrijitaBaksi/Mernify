import { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'

const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const login = (userData)=>setUser(userData);
    const logout = () => {
        setUser(null);
        document.cookie = "token=; Max-Age=0; path=/;";
    };

    useEffect(() => {
    // Grab token from cookie
        const getCookie = (name) => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? match[2] : null;
        };

        const token = getCookie("token");

        if (token) {
        try {
            const decoded = jwtDecode(token);
            setUser(decoded); // restore user
        } catch (error) {
            console.error("Token decoding failed", error);
            setUser(null);
        }
        }

        setLoading(false); // done loading
    }, []);

    return(
        <AuthContext.Provider value={{user,login,logout, loading}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth=() => useContext(AuthContext)