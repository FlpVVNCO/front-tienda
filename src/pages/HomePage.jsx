import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Grid, Toolbar } from "@mui/material";
import CardItems from "../components/CardItems";

const HomePage = () => {
  const { getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Grid container sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
      <Toolbar />
      <Grid item xs={12}>
        <Box sx={{ background: "pink", height: 300 }}></Box>
        <Toolbar />
      </Grid>
      <Grid item xs={12}>
        <CardItems />
      </Grid>
    </Grid>
  );
};

export default HomePage;
