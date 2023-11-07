import Contact from "./Components/Contanct/Contact"
import Footer from "./Components/Footer/Footer"
import Intro from "./Components/Intro/Intro"
import NavBar from "./Components/NavBar/NavBar"
import Skill from "./Components/Skill/Skill"
import Work from "./Components/Works/Work"
import './index.css'
function App() {
  return (
    <><div id="appCom">
      <NavBar />
      <Intro />
      <Skill />
      <Work />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
