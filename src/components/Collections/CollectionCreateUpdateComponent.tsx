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
import { parseJsonSourceFileConfigFileContent, setConstantValue } from "typescript";
import { environment } from "../../config/environment/environment";
import { handleFileUpload } from "../../services/FileService";
import '../../pages/Game/CreateGame.css'

const schema = yup.object({
  name: yup.string().required().min(3).max(200),
  description: yup.string().max(1000),
  imageUrl: yup.string().max(200),
}).required();

const StyledTextField = styled(TextField)({
  backgroundColor: "#262626",
  padding: 0.1,
  marginBottom: 19,
  width: "100%",
  borderRadius: 10,
  '& p': {
    color: 'rgb(255, 108, 50)',
  },
  '& .MuiFormLabel-root': {
    color: '#BFBFBF',
  },
});

export function CollectionCreateUpdateComponent(props: { collection: CollectionCreateDto, onSubmit: (data: any) => void }) {

  const { control, setValue, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: props.collection.name,
      description: props.collection.description,
      imageUrl: props.collection.imageUrl
    }
  });

  const [image, setImage] = useState(props.collection.imageUrl);

  const handleDownload = (value: FileList | null) => {
    if (value) {
      const response = handleFileUpload(value).then((name) => {
        setImage(`/img/games/${name}`);
      })
    };
  }

  useEffect(() =>
    setValue('imageUrl', image, {
      shouldValidate: true,
      shouldDirty: true
    }), [image]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(props.onSubmit)}>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
        <Grid item xs={3}>
          <div className="game_form_image" style={{ backgroundImage: `url(${image})` }}></div>
        </Grid>

        <Grid item xs={5}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <StyledTextField label="Name" helperText={errors?.name && String(errors.name.message)} placeholder="Name" variant="filled" type="text" {...field} />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => <StyledTextField label="Description" helperText={errors?.description && String(errors.description.message)} placeholder="Description" variant="filled" multiline={true} type="text" {...field} />}
          />
          <Grid container alignItems={"center"} justifyContent={"space-between"}>
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
          <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};