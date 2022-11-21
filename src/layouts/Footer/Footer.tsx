import { Grid } from "@mui/material";
import { Link } from "react-router-dom"
import './Footer.css'

export function Footer() {

  return (
    <div className='footerContainer'>
      <div className='footer'>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="footerColumn">
                  <Link to='/'>HOME</Link>
                  <Link to='/browse'>BROWSE</Link>
                  <Link to='/'>COLLECTIONS</Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="footerRightColumn">
              <Link to='/'>PRIVACY POLICY</Link>
              <Link to='/'>TERMS AND CONDITIONS</Link>
              <Link to='/' className="footerCopyright">
                <img className='footerImg' src='/img/logo.svg' />
                <p>Copyright © 2022, Angesie</p>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};