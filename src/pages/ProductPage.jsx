import { Box, Grid } from "@mui/material";
import React from "react";
import Product from "../components/Product";
import CardItems from "../components/CardItems";

const ProductPage = () => {
  return (
    <Grid container>
      <Grid item xl={2}>
        <Box sx={{ background: "pink", height: "100%" }}>x</Box>
      </Grid>
      <Grid
        item
        xs={12}
        xl={10}
        sx={{ px: { xs: 0, sm: 5 }, background: "red" }}>
        <h1>LISTA DE PRODUCTOS</h1>
        <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
          <Product />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
