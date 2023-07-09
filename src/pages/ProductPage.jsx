import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import CardItems from "../components/CardItems";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { getAllProducts } = useProduct();
  const { logout, getProfile } = useAuth();

  useEffect(() => {
    getAllProducts();
    getProfile();
  }, []);

  return (
    <Box>
      <CardItems />
      <Button component={Link} to="/add-product">
        AÑADIR UN PRODUCTO
      </Button>
      <Button onClick={logout}>LOGOUT</Button>
    </Box>
  );
};

export default ProductPage;
