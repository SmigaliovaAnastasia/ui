import React, { useContext, useState } from "react";
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
import { GetUser } from "../../services/Utils/GetUser";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object({
  userName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }).required()
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

export function Register() {
  const authenticationService = new AuthenticationService;
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => {
    console.log(data);

      const response = authenticationService.Register(data);
      response.then(() => {
        navigate('/login');
      }).catch(() => {
      setFormError("User already exists.");
    });
  };

  return (
    <div className="loginContainer">
      <div className="loginHeader">Register</div>
      <div className="form_error">{formError}</div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <Controller
              name="userName"
              defaultValue={''}
              control={control}
              render={({ field }) => <StyledTextField label="userName" helperText={errors?.userName && String(errors.userName.message)} placeholder="UserName" variant="filled" type="text" {...field} />}
            />
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="email"
              defaultValue={''}
              control={control}
              render={({ field }) => <StyledTextField label="email" helperText={errors?.email && String(errors.email.message)} placeholder="Email" variant="filled" type="email" {...field} />}
            />
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="password"
              defaultValue={''}
              control={control}
              render={({ field }) => <StyledTextField label="password" helperText={errors?.password && String(errors.password.message)} placeholder="Password" variant="filled" type="password" {...field} />}
            />
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="confirmPassword"
              defaultValue={''}
              control={control}
              render={({ field }) => <StyledTextField label="confirmPassword" helperText={errors?.confirmPassword && String(errors.confirmPassword.message)} placeholder="Confirm password" variant="filled" type="password" {...field} />}
            />
          </Grid>

          <Grid item xs={8}>
            <Button type="submit" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </form>
      <Link className="form_link" to='/login'>Already registered? Log in.</Link>
    </div>
  );
};