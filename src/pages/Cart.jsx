import { Grid } from "@mui/material";
import { useEffect } from "react";
import CartItems from "../components/CartItems";
import { useProduct } from "../hooks/useProduct";

const Cart = () => {
  const { getAllProducts } = useProduct();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Grid container>
      <Grid item>
        <CartItems />
      </Grid>
    </Grid>
  );
};

export default Cart;
