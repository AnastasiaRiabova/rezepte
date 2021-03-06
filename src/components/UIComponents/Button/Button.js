import styles from './Button.module.css'

export default function Button(props) {
    return (
        <button style={{ ...props.style }} onClick={props.onClick} className={[styles.button, styles[props.color]].join(' ')} type={props.type}>
            {props.label}
        </button>
    )
}
