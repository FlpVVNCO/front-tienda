import { Box, Typography } from "@mui/material";
import React from "react";

const CardCategories = () => {
  const arrayImage = [
    {
      id: 1,
      name: "hombre",
      url: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=256&q=75",
    },
    {
      id: 2,
      name: "mujer",
      url: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=256&q=75",
    },
    {
      id: 3,
      name: "accesorios",
      url: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fsmartwatch-2.png&w=256&q=75",
    },
    {
      id: 4,
      name: "cosméticos",
      url: "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcasmatics.jpg&w=256&q=75",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        gap: 1,
      }}
    >
      {/*  */}
      {arrayImage.map((image) => (
        <Box key={image.id}>
          <Box className="img-box">
            <img className="img-card" src={image.url} />
            <Box className="categorie-name-fondo">
              <Typography
                className="categorie-name"
                component="p"
                textTransform="uppercase"
              >
                VESTUARIO {image.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default CardCategories;
