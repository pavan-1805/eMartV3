import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import increaseProductCount from '../Redux/Reducers/reducers';

const useStyles = makeStyles({
  card: {    
    maxWidth: 350,
    minHeight : 400,    
  },
  media: {
    marginLeft : 90,
    height: 200,
    width : 150
  },
  
});

function ProductCard(props) {
  const classes = useStyles();

  const State = useSelector((state)=>state.increaseProductCount)
  console.log(State);
  const dispatch= useDispatch();
  return (
    <>
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={props.product.url}
          title="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.product.title}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" onClick={()=>(dispatch({ type : "INCREMENT"}))}>
          Add to Cart
        </Button>
        </CardActions>
    </Card>
    
    </>
  );
}

export default ProductCard
