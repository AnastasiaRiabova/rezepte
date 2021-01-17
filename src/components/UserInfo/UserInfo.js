import { NavLink } from "react-router-dom";
import { useState } from 'react'
import { useSelector } from 'react-redux'

import authSelector from '../../Redux/Auth/auth-selectors'
import cross from '../../images/cross.svg'
import burger from '../../images/burger.svg'
import DropBox from "../DropBox/DropBox";

export default function UserInfo() {
    const [menu, setMenu] = useState(false)
    const auth = useSelector(authSelector)
    console.log(auth);
    return (
        <div>
            {auth ? "Name" : null}
            {!auth ? <><NavLink activeStyle={{ color: 'red' }} to="/registration">Registration</NavLink><NavLink to="/login" activeStyle={{ color: 'red' }}>Login</NavLink></> : null
            }
            { menu ? <img onClick={() => setMenu(!menu)} src={cross} alt="cross" /> : <img onClick={() => setMenu(!menu)} src={burger} alt="burger" />}
            { menu ? <DropBox /> : null}
        </div >
    )
}
