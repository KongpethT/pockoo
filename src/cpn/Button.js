import "../css/button.css"

const Button = (props) => {
    const { title, bg, onclick } = props

    return (

        <div className="button">
            <button
                className={bg}
                type="submit"
                style={
                    {
                        margin: "10px 0",
                        minWidth: "90px",
                        border: "none",
                        borderRadius: "5px",
                        padding: "15px 15px"
                    }
                }
                onClick={onclick}
            >{title}</button>
        </div>
    )
}

export default Button

