import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect, useState } from 'react';
import { GenresCheckboxContext } from '../../common/Contexts/GenresCheckboxContest';
import { GenreService } from '../../services/GenreService';
import './GameCheckBox.css'
import GameCheckBoxOption from './GameCheckBoxOption';

export default function GameCheckBox() {
  const genreService = new GenreService;

  const [genreList, setGenreList] = useState<JSX.Element[]>();

  useEffect(() => {
    genreService.getGenres()
      .then((genres) => {
        setGenreList(genres.map(genre => <GameCheckBoxOption genreId={genre.id} genreName={genre.name}/>))
      });
  }, []);

  return (
    <div className="genres_game">
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
          <h3>Genres</h3>
          {genreList}
      </Box>
    </div>
  );
}