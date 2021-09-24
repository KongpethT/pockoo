import "../css/addBlog.css"
import TextInput from "../cpn/TextInput"
import Button from "../cpn/Button"
import Axios from "axios"
import React, { useState } from "react"

const AddBlog = () => {
    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")
    const [blogs, setBlogs] = useState([])

    const getBlogs = () => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogs(response.data)
        })
    }

    const addBlogs = () => {
        Axios.post("http://localhost:3001/create",
            {
                code: code,
                title: title,
                author: author,
                category: category
            }).then(()=>{...blogs,})
}

return (
    <div className="addBlog">
        <div className="addBlog-header">
            <h3>เพิ่มบล็อกใหม่</h3>
        </div>
        <TextInput title="รหัส:" type="text" placeholder="" onchange={(e) => (setCode(e.traget.value))} />
        <TextInput title="เรื่อง:" type="text" placeholder="" onchange={(e) => (setTitle(e.traget.value))} />
        <TextInput title="ผู้แต่ง:" type="text" placeholder="" onchange={(e) => (setAuthor(e.traget.value))} />
        <TextInput title="หมวดหมู่:" type="text" placeholder="" onchange={(e) => (setCategory(e.traget.value))} />
        <Button title="เพิ่ม" bg="success" />
        <Button title="แสงข้อมูลบล็อก" bg="primary" onclick={getBlogs} />
        {blogs.map((row, index) => {
            return (
                <div
                    className="card"
                    key={index}
                    style={{
                        width: "100%"
                    }}
                >
                    <div className="card-body text-left">
                        <p className="card-text">code: {row.code}</p>
                        <p className="card-text">title: {row.title}</p>
                        <p className="card-text">author: {row.author}</p>
                        <p className="card-text">category: {row.category}</p>
                        <p className="card-text">created: {row.created_at}</p>
                        <p className="card-text">update: {row.updated_at}</p>
                    </div>
                </div>

            )
        })

        }
    </div>
)
}

export default AddBlog