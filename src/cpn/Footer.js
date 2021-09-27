import "../css/footer.css"

const Footer = (props) => {
    const { clickAdmin } = props
    return (
        <div className="footer">
            <div className="footer-copyright"><p>Copyright-2021 by pockoo</p></div>
            <div className="footer-sosial">
                <p>
                    <img className="social-item" src="image/footer/facebook.png" alt="facebook" />
                    <span>Facebook</span>
                </p>
                <p>
                    <img className="social-item" src="image/footer/twiter.png" alt="twiter" />
                    <span>Twiter</span>
                </p>
                <p>
                    <img className="social-item" src="image/footer/instagram.png" alt="instagram" />
                    <span>Imstagram</span>
                </p>
                <p onClick={clickAdmin}>
                    <img className="social-item" src="image/footer/admin.png" alt="admin" />
                    <span>Admin</span>
                </p>
            </div>
        </div>
    )
}

export default Footer