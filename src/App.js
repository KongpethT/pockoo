import "./App.css"
import Header from "./template/header"
import Footer from "./template/footer"
import About from "./template/about"
import Blog from "./blogs/blog"
import { useState } from "react"
import Login from "./admin/login"
import Admin from "./admin/admin"
import Demo from "./demo/demoForm"

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
