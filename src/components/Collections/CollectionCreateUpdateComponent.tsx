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

const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  description: yup.string().max(1000),
  imageUrl: yup.string().max(200),
}).required();

const StyledTextField = styled(TextField) ({
  backgroundColor: "#262626",
  padding: 0.1,
  width: "100%",
  borderRadius: 10,
  '& p':{
    color:'rgb(255, 108, 50)',
  },
  '& .MuiFormLabel-root' : {
    color: '#BFBFBF',
  },
});

export function CollectionCreateUpdateComponent(props: {collection: CollectionCreateDto, onSubmit: (data: any) => void}){
  
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: props.collection.name,
      description: props.collection.description,
      imageUrl: props.collection.imageUrl
    }
  });

  return (
    <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
      <Grid item xs={8}>
      <Controller
      name="name"
      control={control}
      render={({ field }) => <StyledTextField label="Name" helperText={errors?.name && String(errors.name.message)} placeholder="Name" variant="filled" type="text" {...field} />}
      />
      </Grid>

      <Grid item xs={8}>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <StyledTextField label="Description" helperText={errors?.description && String(errors.description.message)} placeholder="Description" variant="filled" multiline={true} type="text" {...field} />}
      />
      </Grid>

      <Grid item xs={8}>
      <Controller
        name="imageUrl"
        control={control}
        render={({ field }) => <StyledTextField label="ImageUrl" defaultValue={props.collection.imageUrl}  helperText={errors?.imageUrl && String(errors.imageUrl.message)} placeholder="ImageUrl" variant="filled" multiline={true} type="text" {...field} />}
      />
      </Grid>

      <Grid item xs={6}>
        <Button type="submit" variant="contained">Submit</Button>
      </Grid>
      </Grid>
    </form>
  );
};