import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Toolbar, Box, Typography, Button, Grid, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import DescriptionProduct from "../components/DescriptionProduct";

const ProductViewPage = () => {
  const { transitionName, product, getProduct } = useProduct();

  const params = useParams();

  useEffect(() => {
    getProduct(params.id);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 5, xl: 20 } }}>
        <Toolbar />
        <CardProduct />
      </Grid>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 5, xl: 20 } }}>
        <Toolbar />
        <Divider />
        <DescriptionProduct />
      </Grid>
      <Grid item xs={12}>
        <Toolbar />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default ProductViewPage;
