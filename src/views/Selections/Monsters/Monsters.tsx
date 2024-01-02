import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const Monsters = () => {

  const [selection, setSelection] = useState('')

  const url = 'https://www.dnd5eapi.co/api/monsters'

  const getData = async () => {
      const response = await fetch(`${url}`)
      const data = await response.json()
      console.log(data.results)
      // for (let i=0; i<(data.results).length; i++){
      //   console.log(data.results[i].name)
      // }
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
          
          <MenuItem value={'monster-name'}>Monster Name</MenuItem>
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default Monsters