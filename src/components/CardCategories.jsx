import { Box, Typography } from "@mui/material";
import React from "react";

const CardCategories = () => {
  const imgMen =
    "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt4.png&w=256&q=75";

  const imgWomen =
    "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Ft-shirt5.png&w=256&q=75";

  const imgGadget =
    "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fsmartwatch-2.png&w=256&q=75";

  const imgCosmetics =
    "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fcasmatics.jpg&w=256&q=75";

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between",
        gap: 1,
      }}>
      <Box>
        <Box className="img-box">
          <img className="img-card" src={imgMen} />
          <Box className="categorie-name-fondo">
            <Typography className="categorie-name" component="p">
              VESTUARIO HOMBRE
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="img-box">
          <img className="img-card" src={imgWomen} />
          <Box className="categorie-name-fondo">
            <Typography className="categorie-name" component="p">
              VESTUARIO MUJER
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="img-box">
          <img className="img-card" src={imgGadget} />
          <Box className="categorie-name-fondo">
            <Typography className="categorie-name" component="p">
              ACCESORIOS
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className="img-box">
          <img className="img-card" src={imgCosmetics} />
          <Box className="categorie-name-fondo">
            <Typography className="categorie-name" component="p">
              COSMÉTICOS
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardCategories;
