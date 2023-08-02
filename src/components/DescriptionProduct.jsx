import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useProduct } from "../hooks/useProduct";

const DescriptionProduct = () => {
  const { product } = useProduct();

  return (
    <Grid container>
      <Grid item xs={12} xl={6}>
        <Box>
          <Typography mt={2} fontWeight="bold">
            Descripción:
          </Typography>
          <Typography>
            {product.description} lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Enim vel tempore itaque perspiciatis fugiat
            placeat libero accusamus, voluptatibus magni natus ipsum quidem,
            amet, tempora consectetur aspernatur numquam eveniet pariatur
            expedita.
          </Typography>
          <Typography></Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DescriptionProduct;
