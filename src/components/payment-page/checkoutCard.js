import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import accounting from "accounting";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

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
  CardActions: {
    display: "flexbox",
    justifyContent: "space-between",
    textAlign: "center"
  },
  Rating: {
    display: "flex"
  }
}));

export default function CheckoutCard({
  books: { id, name, category, price, rating, image, description }
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id
    });

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
      <CardActions disableSpacing className={classes.CardActions}>
        <div className={classes.Rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <DeleteIcon fontSize="large" onClick={removeItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
