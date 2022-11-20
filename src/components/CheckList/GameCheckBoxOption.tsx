import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useContext, useEffect, useState } from 'react';
import { GenresCheckboxContext } from '../../common/Contexts/GenresCheckboxContest';
import { GenreService } from '../../services/GenreService';
import './GameCheckBox.css'

export default function GameCheckBoxOption(props: {genreId: string, genreName: string}) {
  const [checked, setChecked] = useState(false);
  const {genreIds, setGenreIds} = useContext(GenresCheckboxContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if(genreIds.includes(props.genreId))
    {
      const index = genreIds.indexOf(props.genreId); 
      const newArray = [...genreIds];
      newArray.splice(index, 1);
      setGenreIds(newArray);
    }
    else
    {
      setGenreIds([...genreIds, props.genreId]);
    }
  };

  return (
    <FormControlLabel
      name={props.genreId}
      label={props.genreName}
      control={<Checkbox checked={checked} onChange={handleChange} />}
    />
  );
}