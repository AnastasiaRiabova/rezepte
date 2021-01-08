import styles from './Input.module.css'
export default function Input(props) {
    return (
        <input className={styles.input} placeholder={props.placeholder} onChange={props.onChange} type={props.type} value={props.value} />
    )
}
