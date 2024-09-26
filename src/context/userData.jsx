/* eslint-disable react/prop-types */



import { createContext, useState } from "react";

export const UserContext = createContext({})

export default function UserProvider({children}) {

    const [userData , setUserData] = useState({
        name : 'Pedro'
    })

    return (
        <UserContext.Provider value={{userData , setUserData}} >
            {children}
        </UserContext.Provider>
    );
}