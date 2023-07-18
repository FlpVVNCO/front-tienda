import React from "react";
import { useProduct } from "../hooks/useProduct";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const CartItems = () => {
  const { cart, removeFromCart, addCart } = useProduct();

  let cartTotal = cart.reduce(
    (acumulador, actual) => acumulador + actual.total,
    0
  );

  console.log(cartTotal);

  console.log(cart);

  return (
    <List>
      {cart.map((product) => (
        <Box key={product._id}>
          <ListItem>
            <CardContent>
              <Typography textAlign="center">{product.name}</Typography>
              <CardActions>
                <Button onClick={() => removeFromCart(product)}>-</Button>
                <Typography>{product.quantity}</Typography>

                <Button onClick={() => addCart(product)}>+</Button>
              </CardActions>
              <Typography>${product.quantity * product.price}</Typography>
            </CardContent>
          </ListItem>
          <Divider />
        </Box>
      ))}
      <Typography>Total: $ {cartTotal}</Typography>
    </List>
  );
};

export default CartItems;
