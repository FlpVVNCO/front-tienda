import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Toolbar, Box, Typography, Button, Grid, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";

const ProductViewPage = () => {
  const { transitionName, product, getProduct } = useProduct();

  console.log(product);

  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <Toolbar />
        <CardProduct />
      </Grid>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <Divider />
        <Box>
          <Typography fontWeight="bold">Description</Typography>
          <Typography>{product.description}</Typography>
        </Box>
      </Grid>
      {/* <Grid item xs={12}>
        <Footer />
      </Grid> */}
    </Grid>
  );
};

export default ProductViewPage;
