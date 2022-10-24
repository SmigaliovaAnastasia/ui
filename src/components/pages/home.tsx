import { Grid, Box, Paper, Card, CardMedia, CardContent, Typography, CardActions, Button} from "@mui/material";
import './home.css';
import { flexbox, fontFamily, styled } from '@mui/system';

const StyledCard = styled(Card)({
  color: '#BFBFBF',
  backgroundColor: '#202020',
  borderRadius: 6,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

const StyledButton = styled(Button)({
  color: '#BFBFBF',
  fontFamily: 'NTR, sans-serif',
  fontSize: '0.7rem'
});

export function Home() {
  return(
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <Box className="home_picture"></Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/fshops.svg" />
              <CardActions>
                <StyledButton>Find Shops</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/mcollections.svg" />
              <CardActions>
                <StyledButton>Manage Collections</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/bgames.svg" />
              <CardActions>
                <StyledButton>Find Games</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/fcommunities.svg" />
              <CardActions>
                <StyledButton>Find Communities</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/jclubs.svg" />
              <CardActions>
                <StyledButton>Join Clubs</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard className="card">
              <CardMedia className="home_icons" image="./img/rgames.svg" />
              <CardActions>
                <StyledButton>Rate Games</StyledButton>
              </CardActions>
            </StyledCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}