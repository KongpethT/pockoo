import { useRef, useState } from "react"
import "../css/addBlog.css"
import "../css/form.css"
import axios from "axios"
import Api from "./API"

const AddBlog = (props) => {

    const [getCode, setCode] = useState(null)
    const [getTitle, setTitle] = useState(null)
    const [getSelectedfile, setSelectedFile] = useState(null)
    const [getImagName, setImageName] = useState(null)
    const [getAuthor, setAuthor] = useState(null)
    const [getCategory, setCategory] = useState(null)
    const [getUrlImage, setUrlImage] = useState(null)
    const imageRef = useRef(null)


    if (getUrlImage === null) {
        setUrlImage("image/bg/240x240.png")
    }
    const onChanged = (event) => {
        setSelectedFile(event.target.files[0])
        setImageName("/image/cover/" + imageRef.current.value.substr(12))
        const file = imageRef.current.files[0]
        if (file) {
            setUrlImage(URL.createObjectURL(file))
        }
    }
    const add = () => {
        if (!!getCode && !!getTitle && !!getSelectedfile) {
            const data = new FormData()
            data.append('file', getSelectedfile)
            axios.post(Api.upload, data, {
            }).then(res => { // then print response status
                console.log(res.statusText)
            })

            axios.post(Api.dataBlogs, {
                code: getCode,
                title: getTitle,
                author: getAuthor,
                category: getCategory,
                text: getImagName
            })
        }
    }
    console.log(getImagName)

    return (
        <div className="add-blog">
            <form className="add-blog">
                <div className="header-bar">
                    <h3>เพิ่มบล็อกใหม่</h3>
                </div>

                <p className="items">
                    <input
                        type="text"
                        placeholder="รหัส *"
                        onChange={(e) => { setCode(e.target.value) }}
                    />
                </p>

                <p className="items">
                    <input
                        type="text"
                        placeholder="เรื่อง *"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </p>
                <p className="items">
                    <input
                        type="text"
                        placeholder="ผู้แต่ง"
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </p>

                <p className="items">
                    <input
                        type="text"
                        placeholder="หมวดหมู่"
                        onChange={(e) => { setCategory(e.target.value) }}
                    />
                </p>
                <div className="image-preview">
                    <img src={getUrlImage} alt="cover"></img>
                </div>
                <p className="items">
                    <input
                        type="file"
                        accept="image/png"
                        ref={imageRef}
                        onChange={onChanged}
                    />
                </p>

                <p><button onClick={add}>เพิ่ม</button></p>
            </form>
        </div >
    )
}

export default AddBlog


