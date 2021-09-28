import React, { useState } from "react"

const Demo = () => {
    const intialState = { id: "", link: "" }
    const [getLink, setLink] = useState(intialState)
    const [getItemList, setItemList] = useState([])
    console.log("dddd", getItemList);
    return (
        <div>
            <div style={{ marginTop: "10px" }}>
                <input type="text"
                    onChange={(event) => { setLink({ ...getLink, id: event.target.value }) }}
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <input type="text"
                    onChange={(event) => { setLink({ ...getLink, link: event.target.value }) }}
                />
            </div>
            <div style={{
                width: "100%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button
                    onClick={() => {

                        setItemList([...getItemList, getLink])
                    }}
                >Add</button>
            </div>
            <div style={{
                width: "100%",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ul>
                    {getItemList.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>numbet: {index} ID:{item.id} Link:{item.link},<button>Delete</button></li>
                                
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}

export default Demo