import CharacterSheets from "./views/CharacterSheets/CharacterSheets"
import Data from "./views/Data/Data"
import Home from "./views/Home/Home"
import LogIn from "./views/LogIn/LogIn"
import Resources from "./views/Resources/Resources"
import SignUp from "./views/SignUp/SignUp"
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/charactersheets" element={<CharacterSheets/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/resources" element={<Resources/>}/>
      </Routes>
    </>
  )
}

export default App
