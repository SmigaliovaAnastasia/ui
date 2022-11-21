import React, { useEffect, useState } from "react";
import { GameService } from "../../services/GameService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { environment } from "../../config/environment/environment";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { handleFileUpload } from "../../services/FileService";
import { GameDto } from "../../common/Entities/GameDtos/GameDto";
import GameCheckBox from "../CheckList/GameCheckBox";
import { GenresCheckboxContext } from "../../common/Contexts/GenresCheckboxContest";
import { ComplexityLevelContext } from "../../common/Contexts/ComplexityLevelContext";
import { ComplexityLevelSelect } from "../GameSelect/ComplexityLevelSelect";
import { GameSeriesContext } from "../../common/Contexts/GameSeriesContext";
import { GameSeriesSelect } from "../GameSelect/GameSeriesSelect";
import { ValidateFiles } from "../../services/Utils/ValidateFile";

const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  description: yup.string().max(1000),
  rules: yup.string().max(1000),
  minNumOfPlayers: yup.number().required().min(1).max(100),
  maxNumOfPlayers: yup.number().required().min(1).max(100),
  minPalyerAge: yup.number().required().min(1).max(100),
  minPlayingTimeMinutes: yup.number().required().min(1).max(Number.MAX_SAFE_INTEGER),
  maxPlayingTimeMinutes: yup.number().required().min(1).max(Number.MAX_SAFE_INTEGER),
  releaseDate: yup.date().required(),
  imageUrl: yup.string(),
  gameSeriesId: yup.string(),
  complexityLevelId: yup.string(),
  genreIds: yup.array().of(yup.string()),
}).required();

const StyledTextField = styled(TextField)({
  backgroundColor: "#262626",
  padding: 0.1,
  width: "100%",
  borderRadius: 10,
  '& p': {
    color: 'rgb(255, 108, 50)',
  },
  '& .MuiFormLabel-root': {
    color: '#BFBFBF',
  },
});

export function GameCreateUpdateComponent(props: { game: GameDto, onSubmit: (data: any) => void }) {
  const [image, setImage] = useState(props.game.imageUrl);
  const [genreIds, setGenreIds] = useState<string[]>([]);
  const [complexityLevelId, setComplexityLevelId] = useState('');
  const [gameSeriesId, setGameSeriesId] = useState('');

  useEffect(() => {
    setValue('genreIds', genreIds, {
      shouldValidate: true,
      shouldDirty: true
    });
  }, [genreIds]);

  const { control, setValue, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: props.game.name,
      description: props.game.description,
      rules: props.game.rules,
      minNumOfPlayers: props.game.minNumOfPlayers,
      maxNumOfPlayers: props.game.maxNumOfPlayers,
      minPalyerAge: props.game.minPalyerAge,
      minPlayingTimeMinutes: props.game.minPlayingTimeMinutes,
      maxPlayingTimeMinutes: props.game.maxPlayingTimeMinutes,
      releaseDate: new Date(props.game.releaseDate).toISOString().substring(0, 10),
      imageUrl: props.game.imageUrl,
      gameSeriesId: props.game.gameSeriesDto.id,
      complexityLevelId: props.game.complexityLevelDto.id,
      genreIds: props.game.genreDtos.map(g => g.id),
    }
  });

  const handleDownload = (value: FileList | null) => {
    if (value) {
      const isValid = ValidateFiles(value[0]);
      if (isValid === '')
        handleFileUpload(value).then((name) => {
          setImage(`/img/games/${name}`);
        })
      else {
        console.log(isValid);
      }
    }
  }

  useEffect(() =>
    setValue('imageUrl', image, {
      shouldValidate: true,
      shouldDirty: true
    }), [image]);

  useEffect(() =>
    setValue('complexityLevelId', complexityLevelId, {
      shouldValidate: true,
      shouldDirty: true
    }), [complexityLevelId]);

  useEffect(() =>
    setValue('gameSeriesId', gameSeriesId, {
      shouldValidate: true,
      shouldDirty: true
    }), [gameSeriesId]);

  return (
    <form className="game_form" autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
        <Grid item xs={3}>
          <div className="game_form_image" style={{ backgroundImage: `url(${image})` }}></div>
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input
              accept="image/*"
              type="file"
              hidden
              onChange={(e) => handleDownload(e.target.files)}
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item xs={6}>
              <Controller
                name="name"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Name" helperText={errors?.name && String(errors.name.message)} placeholder="Name" variant="filled" type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="minPalyerAge"
                control={control}
                render={({ field }) => <StyledTextField label="Min player age" helperText={errors?.minPalyerAge && String(errors.minPalyerAge.message)} placeholder="Min player age" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => <StyledTextField label="Description" helperText={errors?.description && String(errors.description.message)} placeholder="Description" variant="filled" multiline={true} type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="rules"
                control={control}
                render={({ field }) => <StyledTextField label="Rules" helperText={errors?.rules && String(errors.rules.message)} placeholder="Rules" variant="filled" multiline={true} type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="minNumOfPlayers"
                control={control}
                render={({ field }) => <StyledTextField label="Min number of players" helperText={errors?.minNumOfPlayers && String(errors.minNumOfPlayers.message)} placeholder="Min number of players" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="maxNumOfPlayers"
                control={control}
                render={({ field }) => <StyledTextField label="Max number of players" helperText={errors?.maxNumOfPlayers && String(errors.maxNumOfPlayers.message)} placeholder="Max number of players" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="minPlayingTimeMinutes"
                control={control}
                render={({ field }) => <StyledTextField label="Min playing time minutes" helperText={errors?.minPlayingTimeMinutes && String(errors.minPlayingTimeMinutes.message)} placeholder="Min playing time minutes" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="maxPlayingTimeMinutes"
                control={control}
                render={({ field }) => <StyledTextField label="Max playing time minutes" helperText={errors?.minPlayingTimeMinutes && String(errors.minPlayingTimeMinutes.message)} placeholder="Max playing time minutes" variant="filled" type="number" {...field} />}
              />
            </Grid>


            <Grid item xs={12}>
              <Controller
                name="releaseDate"
                control={control}
                render={({ field }) => <StyledTextField label="releaseDate" helperText={errors?.releaseDate && String(errors.releaseDate.message)} variant="filled" type="date" {...field} />}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid container spacing={2} direction="column" justifyContent="center" alignItems="flex-start">
            <Grid item xs={12}>
              <GenresCheckboxContext.Provider value={{ genreIds, setGenreIds }}>
                <GameCheckBox defaultValue={props.game.genreDtos.map(g => g.id)}></GameCheckBox>
              </GenresCheckboxContext.Provider>
            </Grid>
            <Grid item xs={12}>
              <ComplexityLevelContext.Provider value={{ complexityLevelId, setComplexityLevelId }}>
                <ComplexityLevelSelect defaultValue={props.game.complexityLevelDto.id}></ComplexityLevelSelect>
              </ComplexityLevelContext.Provider>
            </Grid>
            <Grid item xs={12}>
              <GameSeriesContext.Provider value={{ gameSeriesId, setGameSeriesId }}>
                <GameSeriesSelect defaultValue={props.game.gameSeriesDto.id}></GameSeriesSelect>
              </GameSeriesContext.Provider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};