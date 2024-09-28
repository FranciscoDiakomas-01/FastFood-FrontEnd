/* eslint-disable react/prop-types */



import { createContext, useState } from "react";
import bg2 from '../page/assets/photo_2024-07-14_22-50-25.jpg'
export const UserContext = createContext({})

export default function UserProvider({children}) {

    const [userData , setUserData] = useState({
        name : 'Francisco',
        email : 'franciscodiakoma@gmail.com',
        profile : bg2,
        pass : "1234",
        adress : 'Cacuaco Sequele A5 B12'
    })

    return (
        <UserContext.Provider value={{userData , setUserData}} >
            {children}
        </UserContext.Provider>
    );
}