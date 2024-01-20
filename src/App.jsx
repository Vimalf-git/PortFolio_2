import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Intro from "./Components/Intro/Intro"
import NavBar from "./Components/NavBar/NavBar"
import Skill from "./Components/Skill/Skill"
import About from "./Components/About/About"
import Work from "./Components/Works/Work"
import './index.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<><NavBar /><Intro /></>
          } />
          <Route path="*" element={<Navigate to={"home"}/>}/>
          <Route path="about" element={<><NavBar/><About/></>}/>
          <Route path="skill" element={<><NavBar/><Skill/></>}/>
          <Route path="project" element={<><NavBar/><Work/></>}/>
          <Route path="contact" element={<><NavBar/><Contact/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
