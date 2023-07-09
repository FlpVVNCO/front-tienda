import { Box } from "@mui/material";

const BoxCenter = (props) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      {...props}>
      {props.children}
    </Box>
  );
};

export default BoxCenter;
