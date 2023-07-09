import { Box, Button, Typography } from "@mui/material";
import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const CardItems = () => {
  const { allProducts, deleteProduct } = useProduct();
  const { user, isAdmin } = useAuth();

  return (
    <Box sx={{ display: "flex", flexFlow: "row wrap" }}>
      {allProducts.map((product) => (
        <Box sx={{ border: "1px solid #000", mr: 2, p: 2 }} key={product._id}>
          <Typography>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography>${product.price}</Typography>
          <Typography>{product.amount}</Typography>
          <Typography>{new Date(product.date).toLocaleDateString()}</Typography>
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
          ) : null}
        </Box>
      ))}
    </Box>
  );
};

export default CardItems;
