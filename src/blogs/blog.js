import "../css/blog.css"
import React, { useEffect, useState } from "react"
import Api from "../admin/API"
import axios from "axios"

const Blog = (props) => {
    const [getJsonData, setJsonData] = useState([])
    const [blogs, setBlogs] = useState([])
    const { clickClose } = props

    useEffect(() => {
        axios.get(Api.gsBlogs).then((response) => {
            setBlogs(response.data)
        })
    }, [])

    return (
        <div className="blog">
            <h3 className="blog-header">มังงะ</h3>
            <p className="blog-close" onClick={clickClose}>X</p>
            <div className="blog-content">
                {
                    blogs.map((row, index) => {
                        return (
                            <div key={index} className="bolg-content-items">
                                <h4>{row.title}</h4>
                                <img src={row.cover} alt="cover" />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Blog
