
import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext=createContext();


const AuthProvider = ({children}) => {
 const authvalue=useFirebase();
    return (
        <AuthContext.Provider value={authvalue}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;