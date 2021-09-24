import { useState } from "react";
import "../css/admin.css"
import AddBlog from "./addBlog";
import AddPost from "./addPost";

const Admin = (props) => {

    const { clickClose } = props
    const [addBlog, setAddBlog] = useState(null)
    const [addPost, setAddPost] = useState(null)

    let addBlogElement = null;
    let addPostElement = null;

    if (!!addBlog) {
        addBlogElement = <AddBlog />
    }

    if (!!addPost) {
        addPostElement = <AddPost />
    }

    return (
        <div className="admin">
            <div className="admin-left">
                <nav>
                    <ul>
                        <li onClick={() => { setAddBlog(true); setAddPost(null) }}>สร้างบล็อกใหม่</li>
                        <li onClick={() => { setAddBlog(null); setAddPost(true) }}>สร้างโพสต์ใหม่</li>
                        <li onClick={clickClose}>ออกจากระบบ</li>
                    </ul>
                </nav>
            </div>
            <div className="admin-right">
                {addBlogElement}
                {addPostElement}
            </div>
        </div>
    )
}

export default Admin