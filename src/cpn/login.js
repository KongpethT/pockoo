import { useState } from "react"
import "../css/login.css"

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
                    <p><input
                        placeholder="ชื่อผู้ใช้งาน"
                        onChange={(e) => { setLoginName(e.target.value) }}
                    /></p>
                    <p><input
                        placeholder="รหัสผ่าน"
                        type="password"
                        onChange={(e) => { setPassword(e.target.value) }}

                    /></p>
                </div>

                <div className="items-button">
                    <p><button onClick={checking}>เข้าสู่ระบบ</button></p>
                    <p><button onClick={clickClose}>ยกเลิก</button></p>
                </div>
            </div>
        </div>
    )
}

export default Login