import { Box } from "@mui/material";
import Product from "./Product";

const CardItems = () => {
  return (
    <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
      <Product />
    </Box>
  );
};

export default CardItems;
