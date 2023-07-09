import React, { useEffect } from "react";
import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button } from "@mui/material";
import CardItems from "../components/CardItems";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { getAllProducts, allProducts } = useProduct();

  const { logout } = useAuth();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box>
      <CardItems />
      <Button onClick={logout}>logout</Button>
    </Box>
  );
};

export default HomePage;
