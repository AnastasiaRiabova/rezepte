import { NavLink } from "react-router-dom";
import { useState } from 'react'
import Button from "../../UIComponents/Button/Button";
import CustomNavlink from "../../UIComponents/NavLink/CustomNavlink";


export default function LoginView() {
    const [name, setName] = useState('')
    const handleNameChange = e => setName(e.currentTarget.value);
    const [password, setPassword] = useState('')
    const handlePasswordChange = e => setPassword(e.currentTarget.value);
    const handleOnsubmit = (e) => {
        e.preventDefault()
        setPassword('')
        setName('')
    }
    return (
        <div>
            LOGIN
            <form >
                <input onChange={handleNameChange} placeholder='name' type="text" value={name} />
                <input onChange={handlePasswordChange} placeholder='password' type="password" value={password} />
                {/* <button onClick={handleOnsubmit} type='submit'>Login</button> */}
                <Button onClick={handleOnsubmit} color="white" label='Login' />
            </form>
            <NavLink to="/registration">Registration</NavLink>
            <CustomNavlink to='/' label='nav' color='orange' />
        </div>
    )
}
