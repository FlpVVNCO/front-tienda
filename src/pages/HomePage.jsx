import { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Grid, Toolbar } from "@mui/material";
import CardItems from "../components/CardItems";

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
        <CardItems />
      </Grid>
    </Grid>
  );
};

export default HomePage;
