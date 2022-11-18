import { Grid, Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { JsxElement } from "typescript";
import { UserContext } from "../../common/Contexts/UserContext";
import './Menu.css'

export function Menu(){
  const { user, setUser } = useContext(UserContext);
  const [link, setLink] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if(user)
    {
      setLink('/logout');
      setText('Log out');
    }
    else
    {
      setLink('/login');
      setText('Log in');
    }
  }, [user]);

  return (
    <div className='menuContainer'>
      <div className='menu'>
        <Grid container>
          <Grid item xs={12} md={10} display='flex' alignItems='center'>
            <img className='menuLogo' src='/img/logo.svg'/>
            <Link to='/'>HOME</Link>
            <Link to='/browse'>BROWSE</Link>
            <Link to='/Collections'>COLLECTIONS</Link>
            <Link to='/'>HELP</Link>
          </Grid>
          <Grid item xs={12} md={2}display='flex' justifyContent='flex-end' alignItems='center'>
              <Link to={link}>{text}</Link>
              <img className='menuUserLogo' src='/img/user.svg'/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};