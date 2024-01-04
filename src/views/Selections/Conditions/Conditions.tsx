import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';

const Conditions = () => {

  interface ICondition {
    name: string,
    index: string,
    url: string
  }

  const [selection, setSelection] = useState('')
  const [condition, setCondition] = useState<ICondition[]>([])

  const url = 'https://www.dnd5eapi.co/api/conditions'

  const getData = async () => {
      const response = await fetch(`${url}/${selection}`)
      const data = await response.json()
          console.log(data.name)
          console.log(data.desc[0])
          console.log(data.desc[1])
}
getData()

useEffect(() => {
  getData2()
},[condition])

  const getData2 = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const addCondition = {}
      console.log(data)

    const dataList = []
    for (let cond in data.results){
      let dataName = (data.results[cond].name)
      let dataIndex = (data.results[cond].index)
      let dataUrl = (data.results[cond].url)
      dataList.push({dataName, dataIndex, dataUrl})
    console.log(dataList)
    }
    }
getData2()

const handleChange = (event: SelectChangeEvent) => {
  setSelection(event.target.value)
}

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
          <MenuItem value={'blinded'}>Blinded</MenuItem>
          <MenuItem value={'charmed'}>Charmed</MenuItem>
          <MenuItem value={'deafened'}>Deafened</MenuItem>
          <MenuItem value={'exhaustion'}>Exhaustion</MenuItem>
          <MenuItem value={'frightened'}>Frightened</MenuItem>
          <MenuItem value={'grappled'}>Grappled</MenuItem>
          <MenuItem value={'incapacitated'}>Incapacitated</MenuItem>
          <MenuItem value={'invisible'}>Invisible</MenuItem>
          <MenuItem value={'paralyzed'}>Paralyzed</MenuItem>
          <MenuItem value={'petrified'}>Petrified</MenuItem>
          <MenuItem value={'poisoned'}>Poisoned</MenuItem>
          <MenuItem value={'prone'}>Prone</MenuItem>
          <MenuItem value={'restrained'}>Restrained</MenuItem>
          <MenuItem value={'stunned'}>Stunned</MenuItem>
          <MenuItem value={'unconscious'}>Unconscious</MenuItem>
       
        </Select>
      </FormControl>
      </Box>
    </>
  )
}
export default Conditions