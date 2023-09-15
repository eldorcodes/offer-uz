import { onAuthStateChanged, getAuth } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

export const Auth = createContext();

export default function AuthContext({children}) {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const data = {
        isLoggedIn,
        auth:getAuth()
    }

    useEffect(() => {
        onAuthStateChanged(getAuth(),(user) => {
            if (user) {
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }
        })
    },[getAuth()])

  return (
    <Auth.Provider value={data}>
        {children}
    </Auth.Provider>
  )
}