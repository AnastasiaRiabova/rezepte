import { NavLink } from "react-router-dom";
import styles from './CustomNavlink.module.css'
export default function CustomNavlink(props) {

    return (
        <NavLink className={[styles.link, styles[props.color]].join(' ')} to={props.to}>
            {props.label}
        </NavLink>
    )
}
