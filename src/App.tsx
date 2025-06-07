import { Route, Routes } from "react-router-dom"
import HomePage from "./Pages/Home/HomePage"
import Login from "./Pages/Login/Login"
import Register from "./Pages/SignUp/Register"
import Blog from "./Pages/BlogPage/Blog"
import Navbar2 from "./Components/Navbar/Navbar2"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/Login" element = {<Login/>}/>
      <Route path="/Register" element = {<Register/>}/>
      <Route path="/Blog" element = {<Blog/>}/>
      <Route path="/Navbar2" element = {<Navbar2/>}/>

    </Routes>
    </>
  )
}

export default App
