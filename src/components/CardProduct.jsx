import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Rating, Divider } from "@mui/material";

const CardProduct = () => {
  const { product, transitionName, addToCart, setOpen } = useProduct();


  const tallas = [
    {
      id: 1,
      talla: "S",
    },
    {
      id: 2,
      talla: "M",
    },
    {
      id: 3,
      talla: "L",
    },
    {
      id: 4,
      talla: "XL",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
      <Box>
        <img
          src={
            product.length === 0
              ? ""
              : `http://localhost:4000/api/${product?.imageUrl}`
          }
          alt={`Producto ${product.name}`}
          style={{ viewTransitionName: transitionName }}
        />
      </Box>

      <Box sx={{ display: "flex", flexFlow: "column wrap" }}>
        <Typography
          variant="h1"
          fontSize={32}
          fontWeight={700}
          lineHeight={2}
          textTransform="uppercase">
          {product.name}
        </Typography>

        <Rating defaultValue={4.5} precision={0.5} size="small" />

        <Typography
          fontSize={28}
          fontWeight={500}
          color="secondary"
          lineHeight={2}>
          ${product.price}
        </Typography>

        <Typography>Talla:</Typography>
        <Box sx={{ display: "flex", flexFlow: "row wrap", gap: 1 }}>
          {tallas.map((tallas) => (
            <Button
              sx={{
                "&:focus": {
                  bgcolor: "secondary.main",
                  color: "white",
                },
              }}
              variant="outlined"
              color="secondary">
              {tallas.talla}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            background: "#F4F4F4",
            borderRadius: 2,
            mt: 2,
            p: 1,
          }}>
          <Divider
            sx={{
              borderRightWidth: 5,
              borderRadius: 20,
              mr: 1,
            }}
            orientation="vertical"
          />
          <Box>
            <Typography color="success.main" fontSize={14}>
              Disponible:{" "}
            </Typography>
            <Typography color="#000" fontSize={14}>
              {product.amount} unidades
            </Typography>
          </Box>
        </Box>

        <Button
          onClick={() => {
            addToCart(product), setOpen(true);
          }}
          sx={{ bgcolor: "primary", p: 2, mt: 2 }}
          variant="contained">
          Agregar al carro
        </Button>
      </Box>
    </Box>
  );
};

export default CardProduct;
