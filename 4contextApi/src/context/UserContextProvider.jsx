import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user ,setUser] = useState(null)
    const [email,setEmail] = useState(null);
    const [extraInfo,setExtraInfo] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser,email,setEmail,extraInfo,setExtraInfo}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;