import {
  Box,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import CardItems from "./CardItems";
import {
  BsCreditCard,
  BsPiggyBank,
  BsStopwatch,
  BsTruck,
} from "react-icons/bs";

const CardInfo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        mb: 2,
        gap: 2,
        p: 2,
        boxShadow:
          "0px 5px 10px -3px rgba(0,0,0,0.1),0px 5px 10px -3px rgba(0,0,0,0.1);",
      }}>
      <Box
        width={250}
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <BsTruck fontSize={50} />
        <Typography fontSize={18}>Delivery</Typography>
      </Box>
      <Divider orientation="vertical" flexItem variant="fullWidth" />
      <Box
        width={250}
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <BsCreditCard fontSize={50} />
        <Typography fontSize={18}>Cuotas sin interés</Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        width={250}
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <BsPiggyBank fontSize={50} />
        <Typography fontSize={18}>Obtén cashback</Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        width={250}
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <BsStopwatch fontSize={50} />
        <Typography fontSize={18}>Atención 24/7</Typography>
      </Box>
    </Box>
  );
};

export default CardInfo;
