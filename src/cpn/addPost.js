import "../css/addPost.css"
import "../css/form.css"

const AddPost = (props) => {
    return (
        <div className="add-post">
            <div className="header-bar">
                <h3>เพิ่มโพสต์ใหม่</h3>
            </div>
            <p className="items"><input placeholder="code" /></p>
            <p className="items"><input placeholder="title" /></p>
            <p className="items"><input placeholder="author" /></p>
            <p className="items"><input placeholder="category" /></p>
            <p><button>เพิ่ม</button></p>
        </div>
    )
}

export default AddPost