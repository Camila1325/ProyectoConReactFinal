import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Books from "./books";
import books from "../../LibreriaLibros/booksJuveniles";

const Item = styled(Paper)(({ theme }) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing()
  }
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4)
  }
}));

export default function BooksJuveniles() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          {books.map((books) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Item>
                <Books key={books.id} books={books} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}
