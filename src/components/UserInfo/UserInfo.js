import { NavLink } from "react-router-dom";
import { useState } from 'react'
import cross from '../../images/cross.svg'
import burger from '../../images/burger.svg'
import DropBox from "../DropBox/DropBox";

export default function UserInfo() {
    const [token, setToken] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <div>
            {token ? "Name" : null}
            {token ? <NavLink onClick={() => setToken(!token)} to="/logout">Logout</NavLink> : <NavLink onClick={() => setToken(!token)} to="/login">Login</NavLink>}
            {menu ? <img onClick={() => setMenu(!menu)} src={cross} alt="cross" /> : <img onClick={() => setMenu(!menu)} src={burger} alt="burger" />}
            {menu ? <DropBox /> : null}
        </div>
    )
}
