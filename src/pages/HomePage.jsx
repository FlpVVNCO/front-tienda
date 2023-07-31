import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Grid, Toolbar, Divider } from "@mui/material";
import CardItems from "../components/CardItems";
import CardInfo from "../components/CardInfo";
import CardCategories from "../components/CardCategories";
import CarouselProduct from "../components/CarouselProduct";
import Footer from "../components/Footer";

const HomePage = () => {
  const { getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  const imageUrl = `https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg`;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "600px",
            width: "100%",
          }}>
          x
        </Box>
        <Toolbar />
      </Grid>
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <CardInfo />
      </Grid>
      <Toolbar />
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <Typography variant="h1" fontSize={26} mb={2}>
          Más vendidos:
        </Typography>
        <CarouselProduct />
      </Grid>
      <Toolbar />
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <Typography variant="h1" fontSize={26} mb={2}>
          Categorias:
        </Typography>
        <CardCategories />
      </Grid>
      <Toolbar />
      <Grid item xs={12} sx={{ px: { xs: 0, sm: 0, xl: 20 } }}>
        <Typography variant="h1" fontSize={26} mb={2}>
          Productos:
        </Typography>
        <CardItems />
      </Grid>
      <Toolbar />
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePage;
