import React from "react";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";
import { getTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flexbox",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "2px"
  }
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length} </h5>
      <h5> {accounting.formatMoney(getTotal(basket), "$ ")} </h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Pagar
      </Button>
    </div>
  );
};

export default Total;
