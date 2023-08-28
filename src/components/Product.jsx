import React, { useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { Box, Typography, Rating, Button, Grid } from "@mui/material";

const Product = () => {
  const { allProducts, deleteProduct, addCart, setOpen } = useProduct();
  const { isAdmin } = useAuth();

  const [state, setState] = useState("");

  return (
    <>
      {allProducts.map((product) => (
        <Grid item xs={12} sm={3} key={product._id}>
          <Box sx={{ display: "flex", flexFlow: "column wrap", mr: 1 }}>
            <Box sx={{ background: "#E3E9EF ", cursor: "pointer" }}>
              <img
                className="img-hover"
                src={`http://localhost:4000/api/${product.imageUrl}`}
                alt={product.name}
              />
            </Box>
            <Box textAlign="center" p>
              <Typography fontWeight="bold">{product.name}</Typography>
              <Typography fontWeight="bold">${product.price}</Typography>
              <Rating defaultValue={4.5} precision={0.5} size="small" />
              {isAdmin ? <Typography>{product.amount}</Typography> : null}
            </Box>
            {isAdmin ? (
              <Box>
                <Button component={Link} to={`/product/${product._id}`}>
                  Update
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(product._id);
                  }}>
                  Delete
                </Button>
              </Box>
            ) : (
              <Button
                onClick={() => {
                  addCart(product), setOpen(true);
                }}>
                Agregar Carrito
              </Button>
            )}
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default Product;
