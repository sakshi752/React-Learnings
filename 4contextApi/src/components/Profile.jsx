import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user,email,extraInfo } = useContext(UserContext);
    return (
        <>
            {user ? (
                <div>
                    <p>userName: {user.username}</p>
                    <p>password: {user.pw}</p>
                    <p>email : {email.mailId}</p>
                    <p>extras: {extraInfo}</p>
                </div>
            ) : (
                <p>Please login</p>
            )}
        </>
    );
}

export default Profile
