import { useEffect, useRef, useState } from "react"
import TextInput from "../cpn/TextInput"
import "../css/addBlog.css"
//import "../css/form.css"
import axios from "axios"
import Api from "../admin/API"

const AddBlog = (props) => {
    const [getCode, setCode] = useState(null)
    const [getTitle, setTitle] = useState(null)
    const [getSelectedfile, setSelectedFile] = useState(null)
    const [getAuthor, setAuthor] = useState(null)
    const [getCategory, setCategory] = useState(null)
    const [getUrlImage, setUrlImage] = useState(null)

    if (getUrlImage === null) {
        setUrlImage("image/bg/240x240.png")
    }

    const onChanged = (event) => {
        setSelectedFile(event.target.files[0])
    }

    useEffect(() => {
        if (!!getSelectedfile) {
            const file = getSelectedfile
            if (file) {
                setUrlImage(URL.createObjectURL(file))
            }
        }
    }, [getSelectedfile])

    const add = () => {
        if (!!getCode && !!getTitle && !!getSelectedfile) {
            const values = {
                code: getCode,
                title: getTitle,
                author: getAuthor,
                category: getCategory,
                text: "/image/cover/" + getSelectedfile.name,
                file: getSelectedfile
            }
            const data = new FormData()
            data.append('photo', getSelectedfile)
            axios.post(Api.upload, data, {})
            axios.post(Api.gsBlogs, {
                code: getCode,
                title: getTitle,
                author: getAuthor,
                category: getCategory,
                text: "/image/cover/" + getSelectedfile.name,
            })
        }
    }

    return (
        <div className="add-blog">
            <div className="header-bar">
                <h3>บล็อกใหม่</h3>
            </div>
            <div className="image-preview">
                <img src={getUrlImage} alt="cover"></img>
            </div>
            <TextInput type="text" placeholder="รหัส" onChange={event => setCode(event.target.value)} />
            <TextInput type="text" placeholder="เรื่อง" onChange={event => setTitle(event.target.value)} />
            <TextInput type="text" placeholder="ผู้แต่ง" onChange={event => setAuthor(event.target.value)} />
            <TextInput type="text" placeholder="หมวดหมู่" onChange={event => setCategory(event.target.value)} />
            <TextInput type="file" accept="image/png, image/jpeg" onChange={onChanged} />
            <TextInput type="submit" value="เพิ่ม" backgroundColor="primary" onClick={add} />
        </div >
    )
}

export default AddBlog


