import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const MagicSchools = () => {

    const [selection, setSelection] = useState('')

    const url = 'https://www.dnd5eapi.co/api/magic-schools'

    const getData = async () => {
        const response = await fetch(`${url}/${selection}`)
        const data = await response.json()
            console.log(data.name)
            console.log(data.desc)
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
          <MenuItem value={'abjuration'}>Abjuration</MenuItem>
          <MenuItem value={'conjuration'}>Conjuration</MenuItem>
          <MenuItem value={'divination'}>Divination</MenuItem>
          <MenuItem value={'enchantment'}>Enchantment</MenuItem>
          <MenuItem value={'evocation'}>Evocation</MenuItem>
          <MenuItem value={'illusion'}>Illusion</MenuItem>
          <MenuItem value={'necromancy'}>Necromancy</MenuItem>
          <MenuItem value={'transmutation'}>Transmutation</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default MagicSchools