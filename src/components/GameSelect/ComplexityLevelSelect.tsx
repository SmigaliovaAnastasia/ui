import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import '../Sorting/Sorting.css'
import '../CheckList/GameCheckBox.css'
import { SortingListModel } from '../../common/Models/SortingListModels/SortingListModel';
import { PagedRequestContext } from '../../common/Contexts/PagedRequestContext';
import { ComplexityLevelContext } from '../../common/Contexts/ComplexityLevelContext';
import { ComplexityLevelService } from '../../services/ComplexityLevelService';

export function ComplexityLevelSelect(props: { defaultValue: string }) {

  const { complexityLevelId, setComplexityLevelId } = useContext(ComplexityLevelContext);
  const [choice, setChoice] = useState<string>('');
  const [items, setItems] = useState<JSX.Element[]>();
  const complexityLevelService = new ComplexityLevelService;

  useEffect(() => {
    complexityLevelService.getComplexityLevels().then(
      data => {
        setItems(data.map(s => { return <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem> }));
        if (!props.defaultValue || props.defaultValue === '') {
          setChoice(data[0].id);
          setComplexityLevelId(data[0].id);
        }
        else
        {
          setChoice(props.defaultValue.toLowerCase());
          setComplexityLevelId(props.defaultValue.toLowerCase());
        }
      }
    );
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value);
    setComplexityLevelId(event.target.value);
  };


  return (
    <div className="genres_game">
      <h3>Complexity Level</h3>
      <div className="sortingComponentContainer">
        <FormControl variant="standard" className="sortingTable">
          <Select className="sortingSelect"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={choice}
            onChange={handleChange}
            label="Complexity level"
          >
            {items}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}