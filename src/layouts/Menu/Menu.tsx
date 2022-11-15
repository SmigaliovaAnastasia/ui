import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom"
import './Menu.css'

export function Menu(){
  
  return (
    <div className='menuContainer'>
      <div className='menu'>
        <Grid container>
          <Grid item xs={12} md={10} display='flex' alignItems='center'>
            <img className='menuLogo' src='/img/logo.svg'/>
            <Link to='/'>HOME</Link>
            <Link to='/browse'>BROWSE</Link>
            <Link to='/'>COLLECTIONS</Link>
            <Link to='/'>HELP</Link>
          </Grid>
          <Grid item xs={12} md={2}display='flex' justifyContent='flex-end' alignItems='center'>
              <Link to='/'>Log in</Link>
              <img className='menuUserLogo' src='/img/user.svg'/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};