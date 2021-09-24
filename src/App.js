import "./App.css"
import Header from "./cpn/Header"
import Footer from "./cpn/Footer"
import About from "./cpn/About"
import Blog from "./cpn/Blog"
import { useState } from "react"
import Login from "./cpn/login"
import Admin from "./cpn/Admin"
import AddBlog from "./cpn/addBlog"

function App() {
  const [about, setAbout] = useState(null)
  const [blog, setBlog] = useState(null)
  const [login, setLogin] = useState(null)
  const [admin, setAdmin] = useState(null)

  let aboutElement = null
  let blogElement = null
  let loginElement = null
  let adminElement = null

  const clickClose = () => {
    setAbout(null)
    setBlog(null)
    setLogin(null)
    setAdmin(null)
  }

  // Check login go to Admin page
  const checked = (key) => {
    if (key === true) {
      return (setAdmin(true))
    }
  }

  if (!!about) {
    aboutElement = <About clickClose={clickClose} />
  }
  if (!!blog) {
    blogElement = <Blog clickClose={clickClose} />
  }
  if (!!login) {
    loginElement = <Login clickClose={clickClose} checked={checked} />
  }
  if (!!admin) {
    adminElement = <Admin clickClose={clickClose} />
  }

  const clickBlog = () => {
    return (setBlog(true))
  }
  const clickAbout = () => {
    return (setAbout(true))
  }
  const clickAdmin = () => {
    return (setLogin(true))
  }


  return (
    <div>
      <AddBlog />
      <Header clickAbout={clickAbout} clickBlog={clickBlog} />
      <Footer clickAdmin={clickAdmin} />
      {aboutElement}
      {blogElement}
      {loginElement}
      {adminElement}

    </div>
  );
}

export default App;
