import CartItems from "./CartItems";
import { Popover, Paper, Typography } from "@mui/material";
import { useProduct } from "../hooks/useProduct";

const PopoverCart = () => {
  const { anchorEl, setAnchorEL, cart } = useProduct();

  const handleClose = () => {
    setAnchorEL(null);
  };

  // hacer que nunca cambie a false cuando se agregan productos
  const open = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}>
      <Paper sx={{ p: 2 }}>
        {cart.length === 0 ? (
          <Typography>No hay productos en el carro</Typography>
        ) : (
          <CartItems />
        )}
      </Paper>
    </Popover>
  );
};

export default PopoverCart;
