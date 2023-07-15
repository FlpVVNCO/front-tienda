import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useProduct } from "../hooks/useProduct";
import CartItems from "./CartItems";

const DrawerCart = () => {
  const { setOpen, open } = useProduct();

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box>
        <Typography p>Tienes dentro del carrito:</Typography>
        <List>
          <CartItems />
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerCart;
