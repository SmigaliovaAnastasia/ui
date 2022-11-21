import { Grid, Card, CardMedia, CardActions } from "@mui/material";
import './Home.css';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { StyledCardComponent } from "../../components/StyledCard/StyledCardComponent";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../common/Contexts/UserContext";
import { Roles } from "../../common/Constants/Roles";

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

  const [userOption, setUserOption] = useState<JSX.Element>();
  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if(user && user.userRole === Roles.Admin) {
      setUserOption(<StyledCardComponent text='Add Games' link='/createGame' img='./img/add.svg'></StyledCardComponent>);
    }
    else {
      setUserOption(<StyledCardComponent text='Rate Games' link='/browse' img='./img/rgames.svg'></StyledCardComponent>);
    }
  }, []);

  return (
    <Grid container justifyContent={"center"} spacing={4}>
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
      <Grid item xs={12} md={2}>
        <Grid container display="flex" flexDirection="column" spacing={2}>
          <Grid item xs={12} md={12}>
            <StyledCardComponent text='Find Games' link='/browse' img='./img/magnifier.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledCardComponent text='Manage Collections' link='/' img='./img/mcollections.svg'></StyledCardComponent>
          </Grid>
          <Grid item xs={12} md={12}>
            {userOption}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}