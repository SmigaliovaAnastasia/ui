import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useEffect, useState } from 'react';
import '../Sorting/Sorting.css'
import '../CheckList/GameCheckBox.css'
import { GameSeriesService } from '../../services/GameSeriesService';
import { GameSeriesContext } from '../../common/Contexts/GameSeriesContext';

export function GameSeriesSelect(props: { defaultValue: string }) {

  const { gameSeriesId, setGameSeriesId } = useContext(GameSeriesContext);
  const [choice, setChoice] = useState<string>('');
  const [items, setItems] = useState<JSX.Element[]>();
  const gameSeriesService = new GameSeriesService;

  useEffect(() => {
    gameSeriesService.getGameSeries().then(
      data => {
        setItems(data.map(s => { return <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem> }));

        if (!props.defaultValue || props.defaultValue === '') {
          setChoice(data[0].id);
          setGameSeriesId(data[0].id);
        }
        else
        {
          setChoice(props.defaultValue.toLowerCase());
          setGameSeriesId(props.defaultValue.toLowerCase());
        }
      }
    );
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setChoice(event.target.value);
    setGameSeriesId(event.target.value);
  };


  return (
    <div className="genres_game">
      <h3>Game Series</h3>
      <div className="sortingComponentContainer">
        <FormControl variant="standard" className="sortingTable">
          <Select className="sortingSelect"
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={choice}
            onChange={handleChange}
            label="gameSeriesId"
          >
            {items}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}