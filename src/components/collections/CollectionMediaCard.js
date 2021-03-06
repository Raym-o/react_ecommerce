import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function CollectionMediaCard(props) {
  const classes = useStyles();
  const { id, title, description, products, image_url } = props;
  console.log("media card");console.log(props);console.log("media card");
  const dispatch = useDispatch();

  return (
    <Card className={classes.root} >
      <CardActionArea >
        <Link
          onClick={()=> dispatch({type: 'SET_SINGLE_COLLECTION',
            value: { id:id, title:title, description:description, image_url:image_url, products:products } }) }
          to={{pathname: `/collection/${id}`}}
          style={{textDecoration: 'none'}} >
        <CardMedia
          className={classes.media}
          image={`http://localhost:3000${image_url}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </CardContent>
        </Link>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          derp
        </Button>
      </CardActions> */}
    </Card>
  );
}