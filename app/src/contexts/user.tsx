'use client';

import LocalStorage from "@/utils/LocalStorage";
import { error } from "console";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext({})

export const UserContextProvider = ({ children }: any) => {
    const [user, setUser] = useState();
    
    useEffect(() => {
        const sessionUser = LocalStorage.getItem('userSession');
        setUser(sessionUser)       
    }, [])
    

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);