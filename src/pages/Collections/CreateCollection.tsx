import React, { useContext, useEffect, useState } from "react";
import { GameService } from "../../services/GameService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { CollectionService } from "../../services/CollectionService";
import { UserContext } from "../../common/Contexts/UserContext";
import { CollectionCreateDto } from "../../common/Entities/CollectionDtos/CollectionCreateDto";
import { useParams } from "react-router-dom";
import { parseJsonSourceFileConfigFileContent } from "typescript";
import { CollectionCreateUpdateComponent } from "../../components/Collections/CollectionCreateUpdateComponent";
import { GetUser } from "../../services/Utils/GetUser";


const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  description: yup.string().max(1000),
  imageUrl: yup.string().max(200),
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

export function CreateCollection() {

  const collectionService = new CollectionService();
  const { user, setUser } = useContext(UserContext);

  const onSubmit = (data: any) => {
    let dto = data as CollectionCreateDto;
    if(user)
    {
      dto.applicationUserId = user.userId;
    }
    collectionService.AddCollection(data);
  };

  const emptyCollection = {
    name: '',
    description: '',
    imageUrl: '',
    applicationUserId: ''
  };

  return (
    <CollectionCreateUpdateComponent collection={emptyCollection} onSubmit={onSubmit}></CollectionCreateUpdateComponent>
  )
};