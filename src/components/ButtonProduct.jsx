import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ButtonProduct = (props) => {
  return (
    <Box>
      <Button component={Link} to={props.to}>
        Update
      </Button>
      <Button onClick={props.onClick}>Delete</Button>
    </Box>
  );
};

export default ButtonProduct;
