import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

const Races = () => {

  interface ISelection {
    name:string,
    age:string,
    alignment:string,
    index:string,
    size:string,
    sizedescription:string,
    speed:string
  }

  const [selection, setSelection] = useState<ISelection>({
    name:'',
    age:'',
    alignment:'',
    index:'',
    size:'',
    sizedescription:'',
    speed:''
  })

  const url = 'https://www.dnd5eapi.co/api/races'

  const getData = async () => {
      const response = await fetch(`${url}/${selection}`)
      const data = await response.json()
      console.log(data)
      console.log(data.name)
      console.log(data)
  }
getData()

const handleChange = (event: SelectChangeEvent) => {
  setSelection(event.target.value)
  }

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


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

          <MenuItem value={'dragonborn'}>Dragonborn</MenuItem>
          <MenuItem value={'dwarf'}>Dwarf</MenuItem>
          <MenuItem value={'elf'}>Elf</MenuItem>
          <MenuItem value={'gnome'}>Gnome</MenuItem>
          <MenuItem value={'half-elf'}>Half-Elf</MenuItem>
          <MenuItem value={'half-orc'}>Half-Orc</MenuItem>
          <MenuItem value={'halfling'}>Halfling</MenuItem>
          <MenuItem value={'human'}>Human</MenuItem>
          <MenuItem value={'tiefling'}>Tiefling</MenuItem>
        </Select>
      </FormControl>
      </Box>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{selection}</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ;
    </>
  )
}
export default Races