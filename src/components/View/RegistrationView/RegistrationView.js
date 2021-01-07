import { NavLink } from "react-router-dom";
import { useState } from 'react'
import Button from "../../UIComponents/Button/Button";
import Input from "../../UIComponents/Input/Input";


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
            <form onSubmit={handleOnsubmit}>
                <Input type='text' onChange={handleNameChange} placeholder='name' value={name} />
                <Input onChange={handleLoginChange} placeholder='login' type="text" value={login} />
                <Input onChange={handlePasswordChange} placeholder='password' type="password" value={password} />
                <Button label="Registration" color='orange' type='submit' />
            </form>
            <NavLink to="/registration">Login</NavLink>
        </div>
    )
}