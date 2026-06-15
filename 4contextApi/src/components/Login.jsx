import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
    const [username, setUsername] = useState("");
    const [pw, setPw] = useState('')
    const [mailId, setMailId] = useState("");
    const [extraMsg,setExtraMsg] = useState("")

    const { setUser,setEmail,setExtraInfo } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, pw })
        setEmail({mailId})
        setExtraInfo(extraMsg)
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder='password'
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            <input type="email" name="" id="" value={mailId} placeholder='Email id' onChange={(e) => setMailId(e.target.value)} />
            <input type="text" value={extraMsg} onChange={(e)=>setExtraMsg(e.target.value)} placeholder='msg'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
