import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useState } from 'react';
import './Sorting.css'
import { SortingListModel } from '../../common/Models/SortingListModels/SortingListModel';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';
import { SortingMethod } from '../../common/Models/PagedRequest/SortingMethod';

export function SortingComponent(props: { sortingList: SortingListModel }) {
  let items = props.sortingList.sortings.map(s => { return <MenuItem key={JSON.stringify(s.value)} value={JSON.stringify(s.value)}>{s.sortingName}</MenuItem> })

  const { state, dispatch } = useContext(PagedRequestContext);
  const [sorting, setSorting] = useState<string>('');

  const handleChange = (event: SelectChangeEvent) => {
    setSorting(event.target.value);
    dispatch({ type: "setSorting", payload: JSON.parse(event.target.value) })
  };


  return (
    <div className="sortingComponentContainer">
      <p>Sort by: </p>
      <FormControl variant="standard" className="sortingTable">
        <Select className="sortingSelect"
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sorting}
          onChange={handleChange}
          label="Sorting"
        >
          {items}
        </Select>
      </FormControl>
    </div>
  );
}