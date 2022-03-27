import { createContext, useContext, useState } from "react"


const AuthContext=createContext();

export function AuthProvider({children}){
    const [login,setLogin]=useState(false);
    // const [loginBtn,setLoginBtn]=useState("Log In");
    return <AuthContext.Provider value={{login,setLogin}}>{children}</AuthContext.Provider>
}

const useAuth=()=>useContext(AuthContext);
export {useAuth};