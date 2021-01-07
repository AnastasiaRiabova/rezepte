import { NavLink } from "react-router-dom";
import { useState } from 'react'


export default function RegistrationView() {
    const [name, setName] = useState('')
    const handleNameChange = e => setName(e.currentTarget.value);
    const [login, setLogin] = useState('')
    const handleLoginChange = e => setLogin(e.currentTarget.value);
    const [password, setPassword] = useState('')
    const handlePasswordChange = e => setPassword(e.currentTarget.value);
    const handleOnsubmit = (e) => {
        e.preventDefault()
        setPassword('')
        setName('')
        setLogin('')
    }
    return (
        <div>
            REGISTRATION
            <form >
                <input onChange={handleNameChange} placeholder='name' type="text" value={name} />
                <input onChange={handleLoginChange} placeholder='login' type="text" value={login} />

                <input onChange={handlePasswordChange} placeholder='password' type="password" value={password} />
                <button onClick={handleOnsubmit} type='submit'>Registration</button>
            </form>
            <NavLink to="/registration">Login</NavLink>
        </div>
    )
}