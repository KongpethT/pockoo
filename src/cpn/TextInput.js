import "../css/textInput.css"

const TextInput = (props) => {
    const { type, title, placeholder, onChange, onClick, backgroundColor, value } = props
    const componentInput = "component-input"
    return (
        <div className="text-input">
            <label>{title}</label>
            <input
                id={backgroundColor}
                className={componentInput}
                type={type}
                onChange={onChange}
                onClick={onClick}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default TextInput