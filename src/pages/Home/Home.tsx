import { Grid, Card, CardMedia, CardActions } from "@mui/material";
import './Home.css';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { StyledCardComponent } from "../../components/StyledCard/StyledCardComponent";

const StyledCard = styled(Card)({
  color: '#BFBFBF',
  backgroundColor: '#202020',
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export function Home() {
  return(
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
          <StyledCard className="home_picture">
            <CardMedia className="home_picture" image="/img/game1.jpg" />
            <div className="homeImageMask">
              <h2 className="homeImageText">Welcome, stranger!</h2>
              <p className="homeImageText">You’ve come a long way, I imagine. You seem tired and cold. 
                Maybe it’s time to sit by the fire and enjoy the company 
                of other travelers in a board game of your choice? </p>
              <div className="homeLogo" ></div>
            </div>
          </StyledCard>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='Find Games' link='/browse' img='./img/magnifier.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='Manage Collections' link='/' img='./img/mcollections.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='Rate Games' link='/' img='./img/rgames.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='FAQs' link='/' img='./img/faq.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='Manage Profile' link='/' img='./img/user.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCardComponent text='Settings' link='/' img='./img/settings.svg'></StyledCardComponent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}