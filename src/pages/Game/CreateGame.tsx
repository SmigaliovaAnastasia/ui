import React, { useEffect, useState } from "react";
import { GameService } from "../../services/GameService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './CreateGame.css'

const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  minPalyerAge: yup.number().required().min(1).max(100),
  minNumOfPlayers: yup.number().required().min(1).max(100),
  maxNumOfPlayers: yup.number().required().min(1).max(100),
  description: yup.string().max(1000),
  rules: yup.string().max(1000),
  playingTime: yup.string().matches(/^[0-9]{1,3}((-[0-9]{1,3})|\+) (min|hours?)$/),
  releaseDate: yup.date().required(),
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

export function CreateGame() {
  const gameservice = new GameService();
  const [image, setImage] = useState("");
  const fileSaver = require('file-saver');

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => gameservice.AddGame(data);

  const handleDownload = (value: FileList | null) => {
    const fr = new FileReader();
    if (value) {
      fr.readAsArrayBuffer(value[0]);
      fr.onload = () => {
        if (fr.result) {
          const blob = new Blob([fr.result]);
          const url = "/img/HELP.jpg";
          fileSaver.saveAs(blob, url);
          setImage(url);
        }
      }
    }
  }

  return (
    <form className="game_form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction="column" justifyContent="flex-start" alignItems="center">
        <Grid item xs={4}>
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
        <Grid item xs={8}>
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
                name="playingTime"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Playing time" helperText={errors?.playingTime && String(errors.playingTime.message)} placeholder="Playing time (ex.) 1-2 hours" variant="filled" type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="description"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Description" helperText={errors?.description && String(errors.description.message)} placeholder="Description" variant="filled" multiline={true} type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="rules"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Rules" helperText={errors?.rules && String(errors.rules.message)} placeholder="Rules" variant="filled" multiline={true} type="text" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="minNumOfPlayers"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Min number of players" helperText={errors?.minNumOfPlayers && String(errors.minNumOfPlayers.message)} placeholder="Min number of players" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="maxNumOfPlayers"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Max number of players" helperText={errors?.maxNumOfPlayers && String(errors.maxNumOfPlayers.message)} placeholder="Max number of players" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="minPalyerAge"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="Min player age" helperText={errors?.minPalyerAge && String(errors.minPalyerAge.message)} placeholder="Min player age" variant="filled" type="number" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="releaseDate"
                defaultValue={''}
                control={control}
                render={({ field }) => <StyledTextField label="releaseDate" defaultValue="1998-07-14" helperText={errors?.releaseDate && String(errors.releaseDate.message)} variant="filled" type="date" {...field} />}
              />
            </Grid>

            <Grid item xs={6}>
              <Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};