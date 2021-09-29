import "../css/header.css";

const Header = (props) => {
    const { clickAbout, clickBlog } = props
    return (
        <div className="header" >
            <nav className="header-navbar" >
                <ul className="navbar-menu">
                    <li className="menu-items" onClick={clickBlog}> มังงะ </li> |
                    <li className="menu-items" onClick={clickAbout}> เกี่ยวกับ </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header