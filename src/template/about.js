import "../css/about.css"

const About = (props) => {
    const { clickClose } = props

    return (
        <div className="about">
            <h3 className="about-header">เกี่ยวกับ</h3>
            <p className="about-close" onClick={clickClose}>X</p>
            <div className="about-content">
                <div>
                    <h4>Donated:</h4>
                    <p>
                        help the webpage expenses for their better future You can help
                    </p>
                </div>
                <div>
                    <h4>รับสนับสนุน:</h4>
                    <p>
                        ช่วยค่าใช้จ่ายของหน้าเว็บเพื่ออนาคตที่ดีกว่า คุณสามารถช่วยได้
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About