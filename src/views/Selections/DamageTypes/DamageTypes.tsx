import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const DamageTypes = () => {

    const [selection, setSelection] = useState('')

    const url = 'https://www.dnd5eapi.co/api/damage-types'

    const getData = async () => {
        const response = await fetch(`${url}/${selection}`)
        const data = await response.json()
            console.log
            console.log(data.name)
            console.log(data.desc[0])
            console.log(data.desc[1])
}
getData()    

const handleChange = (event: SelectChangeEvent) => {
  setSelection(event.target.value)
}


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
            <MenuItem value={'acid'}>Acid</MenuItem>
            <MenuItem value={'bludgeoning'}>Bludgeoning</MenuItem>
            <MenuItem value={'cold'}>Cold</MenuItem>
            <MenuItem value={'fire'}>Fire</MenuItem>
            <MenuItem value={'force'}>Force</MenuItem>
            <MenuItem value={'lightning'}>Lightning</MenuItem>
            <MenuItem value={'necrotic'}>Necrotic</MenuItem>
            <MenuItem value={'piercing'}>Piercing</MenuItem>
            <MenuItem value={'poison'}>Poison</MenuItem>
            <MenuItem value={'psychic'}>Psychic</MenuItem>
            <MenuItem value={'radiant'}>Radiant</MenuItem>
            <MenuItem value={'slashing'}>Slashing</MenuItem>
            <MenuItem value={'thunder'}>Thunder</MenuItem>
          

       
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default DamageTypes