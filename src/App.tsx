import CharacterSheets from "./views/CharacterSheets/CharacterSheets"
import Data from "./views/Data/Data"
import Home from "./views/Home/Home"
import LogIn from "./views/LogIn/LogIn"
import ProfileUpdate from "./views/ProfileUpdate/ProfileUpdate"
import Resources from "./views/Resources/Resources"
import AbilityScores from "./views/Selections/AbilityScores/AbilityScores"
import Classes from "./views/Selections/Classes/Classes"
import Conditions from "./views/Selections/Conditions/Conditions"
import DamageTypes from "./views/Selections/DamageTypes/DamageTypes"
import Equipment from "./views/Selections/Equipment/Equipment"
import EquipmentCategories from "./views/Selections/EquipmentCategories/EquipmentCategories"
import Features from "./views/Selections/Features/Features"
import MagicItems from "./views/Selections/MagicItems/MagicItems"
import MagicSchools from "./views/Selections/MagicSchools/MagicSchools"
import Monsters from "./views/Selections/Monsters/Monsters"
import Races from "./views/Selections/Races/Races"
import RuleSections from "./views/Selections/RuleSections/RuleSections"
import Rules from "./views/Selections/Rules/Rules"
import Spells from "./views/Selections/Spells/Spells"
import Traits from "./views/Selections/Traits/Traits"
import WeaponProperties from "./views/Selections/WeaponProperties/WeaponProperties"
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
        <Route path="/abilityscores" element={<AbilityScores/>}/>
        <Route path="/conditions" element={<Conditions/>}/>
        <Route path="/damagetypes" element={<DamageTypes/>}/>
        <Route path="/equipment" element={<Equipment/>}/>
        <Route path="/equipmentcategories" element={<EquipmentCategories/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/magicitems" element={<MagicItems/>}/>
        <Route path="/magicschools" element={<MagicSchools/>}/>
        <Route path="/monsters" element={<Monsters/>}/>
        <Route path="/races" element={<Races/>}/>
        <Route path="/rulesections" element={<RuleSections/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/spells" element={<Spells/>}/>
        <Route path="/traits" element={<Traits/>}/>
        <Route path="/weaponproperties" element={<WeaponProperties/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/profileupdate" element={<ProfileUpdate/>}/>

      </Routes>
    </>
  )
}

export default App
