import {
  Box,
  Button,
  Typography,
  ImageList,
  ImageListItem,
  Rating,
} from "@mui/material";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Product from "./Product";

const CardItems = () => {
  const { allProducts, deleteProduct, getProduct, addCart, setOpen } =
    useProduct();
  const { user, isAdmin } = useAuth();

  return (
    <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
      <Product />
    </Box>
  );
};

export default CardItems;
