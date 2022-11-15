import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import './Sorting.css'

export function SortingComponent() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" className="sortingTable">
        <Select className="sortingSelect"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>Name: A-Z</MenuItem>
          <MenuItem value={20}>Name: Z-A</MenuItem>
          <MenuItem value={30}>Rating: High to Low</MenuItem>
          <MenuItem value={40}>Rating: Low to High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}