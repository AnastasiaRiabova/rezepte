import { NavLink } from "react-router-dom";
import { useState } from 'react'
import Button from "../../UIComponents/Button/Button";
import CustomNavlink from "../../UIComponents/NavLink/CustomNavlink";
import Input from "../../UIComponents/Input/Input";


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
            <form onSubmit={handleOnsubmit}>
                <Input onChange={handleNameChange} placeholder='name' type="text" value={name} />
                <Input onChange={handlePasswordChange} placeholder='password' type="password" value={password} />
                {/* <button onClick={handleOnsubmit} type='submit'>Login</button> */}
                <Button color="white" label='Login' type='submit' />
            </form>
            <CustomNavlink to='/registration' label='Registration' color='orange' />
        </div>
    )
}
