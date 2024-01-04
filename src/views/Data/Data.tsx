import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';

const Data = () => {

  const [selection, setSelection] = useState('')

  const url = 'https://www.dnd5eapi.co'

  const getData = async () => {
      const response = await fetch(`${url}/api/${selection.toLowerCase().replace(' ','-')}`)
      const data = await response.json()
      console.log(data)
  }
getData()

const handleChange = (event: SelectChangeEvent) => {
  setSelection(event.target.value);

  };
  return (
    <>
      <Nav/>      
      <Box className="m-3 w-25 mx-auto" sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Selection</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label="Selection"
          onChange={handleChange}
        >
          <MenuItem className='menuItem' value={'Ability Scores'}><Link to='/abilityscores'>Ability Scores</Link></MenuItem>
          <MenuItem className='menuItem' value={'Classes'}><Link to='/classes'>Classes</Link></MenuItem>
          <MenuItem className='menuItem' value={'Conditions'}><Link to='/conditions'>Conditions</Link></MenuItem>
          <MenuItem className='menuItem' value={'Damage Types'}><Link to='/damagetypes'>Damage Types</Link></MenuItem>
          <MenuItem className='menuItem' value={'Equipment'}><Link to='/equipment'>Equipment</Link></MenuItem>
          <MenuItem className='menuItem' value={'Equipment Categories'}><Link to='/equipmentcategories'>Equipment Categories</Link></MenuItem>
          <MenuItem className='menuItem' value={'Features'}><Link to='/features'>Features</Link></MenuItem>
          <MenuItem className='menuItem' value={'Magic Items'}><Link to='/magicitems'>Magic Items</Link></MenuItem>
          <MenuItem className='menuItem' value={'Magic Schools'}><Link to='/magicschools'>Magic Schools</Link></MenuItem>
          <MenuItem className='menuItem' value={'Monsters'}><Link to='/monsters'>Monsters</Link></MenuItem>
          <MenuItem className='menuItem' value={'Races'}><Link to='/races'>Races</Link></MenuItem>
          <MenuItem className='menuItem' value={'Rule Sections'}><Link to='/rulesections'>Rule Sections</Link></MenuItem>
          <MenuItem className='menuItem' value={'Rules'}><Link to='/rules'>Rules</Link></MenuItem>
          <MenuItem className='menuItem' value={'Spells'}><Link to='/spells'>Spells</Link></MenuItem>
          <MenuItem className='menuItem' value={'Traits'}><Link to='/traits'>Traits</Link></MenuItem>
          <MenuItem className='menuItem' value={'Weapon Properties'}><Link to='/weaponproperties'>Weapon Properties</Link></MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default Data