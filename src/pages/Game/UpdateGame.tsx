import React, { useContext, useEffect, useState } from "react";
import { GameService } from "../../services/GameService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './CreateGame.css'
import { environment } from "../../config/environment/environment";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { handleFileUpload } from "../../services/FileService";
import { GameCreateUpdateComponent } from "../../components/Games/GameCreateUpdateComponent";
import { GameDto } from "../../common/Entities/GameDtos/GameDto";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../common/Contexts/UserContext";
import { Roles } from "../../common/Constants/Roles";

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

export function UpdateGame() {
  const gameservice = new GameService();
  const params = useParams();
  
  const [gameComponent, setGameComponent] = useState<JSX.Element>();
  const navigate = useNavigate();
  
  const onSubmit = (data: any) => { gameservice.UpdateGame(String(params.id), data).then(() => navigate('/browse')) };

  useEffect(() => {
    var request = gameservice.getGameById(String(params.id));
    request.then(d => {
      setGameComponent(
        <GameCreateUpdateComponent game={d}
          onSubmit={onSubmit}
        />)
    });
  }, []);


  return (
    <div>{gameComponent}</div>
  );
};