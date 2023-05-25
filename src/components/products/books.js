import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import accounting from "accounting";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    maxWidth: 345
  },
  action: {
    marginTop: "1rem"
  },
  media: {
    height: 20,
    paddingTop: "100%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function Books({
  books: { id, name, category, price, rating, image, description }
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [{ basket }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        category: category,
        price: price,
        rating: rating,
        image: image,
        description: description
      }
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant=""
            color="textSecondary"
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader={category}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardActions disableSpacing>
        <IconButton aria-label="carrito" onClick={addToBasket}>
          <AddShoppingCartIcon />
        </IconButton>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
