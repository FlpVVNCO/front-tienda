import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Button, Rating, Divider } from "@mui/material";

const CardProduct = () => {
  const { product, transitionName, addCart, setOpen } = useProduct();

  return (
    <Box
      sx={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
      <Box>
        <img
          src={`http://localhost:4000/api/${product.imageUrl}`}
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

        <Typography fontSize={28} fontWeight={500} color="red" lineHeight={2}>
          ${product.price}
        </Typography>

        <Typography>Talla:</Typography>
        <Box sx={{ display: "flex", flexFlow: "row wrap", gap: 1 }}>
          <Button
            sx={{
              "&:focus": {
                background: "red",
                color: "white",
              },
            }}
            variant="outlined"
            color="error">
            S
          </Button>
          <Button
            sx={{
              "&:focus": {
                background: "red",
                color: "white",
              },
            }}
            variant="outlined"
            color="error">
            M
          </Button>
          <Button
            sx={{
              "&:focus": {
                background: "red",
                color: "white",
              },
            }}
            variant="outlined"
            color="error">
            L
          </Button>
          <Button
            sx={{
              "&:focus": {
                background: "red",
                color: "white",
              },
            }}
            variant="outlined"
            color="error">
            XL
          </Button>
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
          <Typography color="#14a741" fontSize={14}>
            Disponible:{" "}
            <Typography color="#000" fontSize={14}>
              {product.amount} unidades
            </Typography>
          </Typography>
        </Box>

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
