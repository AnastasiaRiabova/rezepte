
export default function Input(props) {
    return (
        <input placeholder={props.placeholder} onChange={props.onChange} type={props.type} value={props.value} />
    )
}
