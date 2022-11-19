import { Card, CardMedia, CardActions } from "@mui/material";
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)({
  color: '#BFBFBF',
  backgroundColor: '#202020',
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
});

export function StyledCardComponent(props: { text: string, link: string, img: string }) {

  return (
    <StyledCard className="card">
      <CardMedia className="home_icons" image={props.img} />
      <CardActions>
        <Link className="homeLink" to={props.link}>{props.text}</Link>
      </CardActions>
    </StyledCard>
  );
}