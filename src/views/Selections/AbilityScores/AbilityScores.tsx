import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const AbilityScores = () => {

  const [selection, setSelection] = useState('')

  const url = 'https://www.dnd5eapi.co/api/ability-scores'

  const getData = async () => {
      const response = await fetch(`${url}/${selection}`)
      const data = await response.json()
      
      if(selection === 'cha'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log(data.skills[0].name)
        console.log(data.skills[1].name)
        console.log(data.skills[2].name)
        console.log(data.skills[3].name)
      }else if(selection === 'con'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log('No Skills')
      }else if(selection === 'dex'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log(data.skills[0].name)
        console.log(data.skills[1].name)
        console.log(data.skills[2].name)
      }else if(selection === 'int'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log(data.skills[0].name)
        console.log(data.skills[1].name)
        console.log(data.skills[2].name)
        console.log(data.skills[3].name)
        console.log(data.skills[4].name)
      }else if(selection === 'str'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log(data.skills[0].name)
      }else if(selection === 'wis'){
        console.log(data.full_name)
        console.log(data.desc[0])
        console.log(data.desc[1])
        console.log(data.skills[0].name)
        console.log(data.skills[1].name)
        console.log(data.skills[2].name)
        console.log(data.skills[3].name)
        console.log(data.skills[4].name)
      }else{
        console.log('Please make selection')
      }
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
          <MenuItem value={'cha'}>Charisma</MenuItem>
          <MenuItem value={'con'}>Constitution</MenuItem>
          <MenuItem value={'dex'}>Dexterity</MenuItem>
          <MenuItem value={'int'}>Intelligence</MenuItem>
          <MenuItem value={'str'}>Strength</MenuItem>
          <MenuItem value={'wis'}>Wisdom</MenuItem>
       
        </Select>
      </FormControl>
      </Box>
    {selection != '' &&
        <div>

        </div>
  }
    </>
  )
}
export default AbilityScores