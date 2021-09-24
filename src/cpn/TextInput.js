import "../css/textInput.css"

const TextInput = (props) => {
    const { title, type, placeholder, onchange } = props

    return (
        <div
            className="TextInput"
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    width: "60%",
                    margin: "0 auto"
                }
            }
        >
            <label style={
                {
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    marginTop: "10px",

                }
            }>{title}</label>
            <input
                type={type}
                onChange={onchange}
                placeholder={placeholder}
                style={
                    {
                        width: "100%",
                        height: "30px",
                        border: "0",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        outline: "none",
                        borderRadius: "5px",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "lighter",
                    }
                }
            />
        </div>
    )
}

export default TextInput