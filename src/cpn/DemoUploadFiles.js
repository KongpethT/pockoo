import axios from 'axios';
import React, { Component, useState } from 'react';
const DemoUploadFiles = (props) => {
    const [selectedFile, setSelectedFile] = useState(null)

    const onChangeHandler = (event) => {
        setSelectedFile(event.target.files[0])
    }

    const onClickHandler = () => {
        const data = new FormData()
        data.append('file', selectedFile)

        axios.post("http://localhost:3001/upload", data, { // receive two parameter endpoint url ,form data 
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    //console.log(selectedFile)
    return (
        <div>
            <input type="file" name="file" onChange={onChangeHandler} />

            <button type="button" onClick={onClickHandler}>Upload</button>
        </div>
    )
}

export default DemoUploadFiles;