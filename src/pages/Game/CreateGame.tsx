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
import { environment } from "../../config/environment/environment";
import { CheckBox } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { handleFileUpload } from "../../services/FileService";
import { GameCreateUpdateComponent } from "../../components/Games/GameCreateUpdateComponent";
import { GameDto } from "../../common/Entities/GameDtos/GameDto";

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

export function CreateGame() {
  const gameservice = new GameService();
  const onSubmit = (data: any) => { gameservice.AddGame(data) };

  const emptyDto: GameDto = {
    id: '',
    name: '',
    description: '',
    rules: '',
    minPalyerAge: 0,
    minNumOfPlayers: 0,
    maxNumOfPlayers: 0,
    minPlayingTimeMinutes: 0,
    maxPlayingTimeMinutes: 0,
    imageUrl: '',
    rating: 0,
    releaseDate: new Date(),
    genreDtos: [],
    gameSeriesDto: {
      id: '',
      name: '',
      description: '',
      imageUrl: ''
    },
    complexityLevelDto: {
      id: '',
      name: '',
      description: ''
    },
    reviewIds: []
  };

  return (
    <GameCreateUpdateComponent game={emptyDto} onSubmit={onSubmit}></GameCreateUpdateComponent>
  );
};