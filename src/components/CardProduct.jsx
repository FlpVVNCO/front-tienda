import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Rating } from "@mui/material";

const CardProduct = () => {
  const { product, transitionName, addCart, setOpen } = useProduct();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <img
        src={`http://localhost:4000/api/${product.imageUrl}`}
        alt={`Producto ${product.name}`}
        style={{ viewTransitionName: transitionName }}
      />
      <Box sx={{ display: "flex", flexFlow: "column wrap" }}>
        <Typography variant="h1" fontSize={32} fontWeight={700} lineHeight={2}>
          {product.name}
        </Typography>
        <Rating defaultValue={4.5} precision={0.5} size="small" />
        <Typography fontSize={28} fontWeight={500} color="red" lineHeight={2}>
          ${product.price}
        </Typography>
        <Typography>
          Talla: <Typography>S, M, L, XL</Typography>
        </Typography>
        <Typography color="#14a741" fontSize={14} mt={2}>
          disponible:{" "}
          <Typography color="#000" fontSize={14}>
            {product.amount} unidades
          </Typography>
        </Typography>
        <Button
          onClick={() => {
            addCart(product), setOpen(true);
          }}
          variant="contained"
          sx={{
            p: 2,
            background: "red",
            "&:hover": {
              background: "red",
            },
            mt: 2,
          }}>
          Agregar al carro
        </Button>
      </Box>
    </Box>
  );
};

export default CardProduct;
