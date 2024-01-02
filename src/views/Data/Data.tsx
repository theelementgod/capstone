import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

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
          <MenuItem value={'Ability Scores'}>Ability Scores</MenuItem>
          <MenuItem value={'Classes'}>Classes</MenuItem>
          <MenuItem value={'Conditions'}>Conditions</MenuItem>
          <MenuItem value={'Damage Types'}>Damage Types</MenuItem>
          <MenuItem value={'Equipment'}>Equipment</MenuItem>
          <MenuItem value={'Equipment Categories'}>Equipment Categories</MenuItem>
          <MenuItem value={'Features'}>Features</MenuItem>
          <MenuItem value={'Magic Items'}>Magic Items</MenuItem>
          <MenuItem value={'Magic Schools'}>Magic Schools</MenuItem>
          <MenuItem value={'Monsters'}>Monsters</MenuItem>
          <MenuItem value={'Races'}>Races</MenuItem>
          <MenuItem value={'Rule Sections'}>Rule Sections</MenuItem>
          <MenuItem value={'Rules'}>Rules</MenuItem>
          <MenuItem value={'Spells'}>Spells</MenuItem>
          <MenuItem value={'Subclasses'}>Subclasses</MenuItem>
          <MenuItem value={'Subraces'}>Subraces</MenuItem>
          <MenuItem value={'Traits'}>Traits</MenuItem>
          <MenuItem value={'Weapon Properties'}>Weapon Properties</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default Data