import React, { useContext } from "react";
import { AuthenticationService } from "../../services/AuthenticationService";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from '@mui/system';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { UserService } from "../../services/UserService";
import { UserContext } from "../../common/Contexts/UserContext";
import './Login.css';

const schema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
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

export function Login(){
  const authenticationService = new AuthenticationService;
  const userService = new UserService;
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const {user, setUser} = useContext(UserContext);

  const onSubmit = (data : any) => { 
    const response = authenticationService.Login(data); 
    response.then(() => 
    {
      const data = userService.Get();
      data.then((d) => setUser(d));
    });
  };

  return (
    <div className="loginContainer">
    <div className="loginHeader">Log In</div>
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
      <Grid item xs={6}>
      <Controller
      name="userName"
      defaultValue={''}
      control={control}
      render={({ field }) => <StyledTextField label="userName" helperText={errors?.userName && String(errors.userName.message)} placeholder="UserName" variant="filled" type="text" {...field} />}
      />
      </Grid>
      <Grid item xs={6}>
      <Controller
      name="password"
      defaultValue={''}
      control={control}
      render={({ field }) => <StyledTextField label="password" helperText={errors?.password && String(errors.password.message)} placeholder="Password" variant="filled" type="password" {...field} />}
      />
      </Grid>

      <Grid item xs={6}>
        <Button type="submit" variant="contained">Submit</Button>
      </Grid>
      </Grid>
    </form>
    </div>
  );
};