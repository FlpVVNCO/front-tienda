import React from "react";
import { useProduct } from "../hooks/useProduct";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const CartItems = () => {
  const { cart, removeFromCart, addCart } = useProduct();

  return (
    <>
      {cart.map((product) => (
        <Card key={product._id}>
          <CardContent>
            <Typography textAlign="center">{product.name}</Typography>
            <CardActions>
              <Button onClick={() => removeFromCart(product)}>-</Button>
              <Typography>{product.quantity}</Typography>
              <Button onClick={() => addCart(product)}>+</Button>
            </CardActions>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CartItems;
