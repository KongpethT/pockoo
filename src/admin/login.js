import { useState } from "react"
import "../css/login.css"
import TextInput from "../cpn/TextInput"

const Login = (props) => {
    const { clickClose, checked } = props
    const [loginName, setLoginName] = useState(null)
    const [password, setPassword] = useState(null)
    const keyChecking = { use: "kongpetht", password: "426576" }


    const checking = () => {
        if (loginName === keyChecking.use && password === keyChecking.password) {
            checked(true)
        }
    }

    return (
        <div className="login">
            <div className="login-header">
                <h3>ผู้ดูแลระบบ</h3>
            </div>
            <div className="login-itmes">
                <div className="items-input">

                    <TextInput placeholder="ชื่อผู้ใช้งาน" type="text" onChange={(e) => { setLoginName(e.target.value) }} />
                    {/*
                        <input
                        placeholder="ชื่อผู้ใช้งาน"
                        onChange={(e) => { setLoginName(e.target.value) }}
                    />
                        */}


                    <TextInput placeholder="รหัสผ่าน" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    {/*
                        <input
                        placeholder="รหัสผ่าน"
                        type="password"
                        onChange={(e) => { setPassword(e.target.value) }}

                    />
                        */}

                </div>

                <div className="items-button">
                    <TextInput type="button" value="เข้าสู้ระบบ" backgroundColor="primary" onClick={checking} />
                    <TextInput type="button" value="ยกเลิก" backgroundColor="primary" onClick={clickClose} />
                    {/*
                    <p><button onClick={checking}>เข้าสู่ระบบ</button></p>
                    <p><button onClick={clickClose}>ยกเลิก</button></p>

                    */}
                </div>
            </div>
        </div>
    )
}

export default Login