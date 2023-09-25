import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Product from "../components/Product";
import Filters from "../components/Filters";

const ProductPage = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 5, xl: 20 } }}>
        <Grid container>
          <Grid item xs={12} sm={2} xl={2}>
            <Filters />
          </Grid>
          <Grid item xs={12} sm={10} xl={10} sx={{ px: { xs: 0, sm: 5 } }}>
            <Box
              p
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                border: "2px solid #000",
                height: "100%",
                borderRadius: "10px",
              }}
            >
              <Product />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
