import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Icon,
  TextField,
  InputAdornment,
  Autocomplete,
  Stack,
} from "@mui/material";
import {
  BsMenuApp,
  BsFillCartFill,
  BsCartPlus,
  BsSearch,
} from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import DrawerCart from "./DrawerCart";
import ScrollHide from "./utilities/ScrollHide";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerCart />

      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", color: "black", px: 15 }}>
        <SearchBar />
        {/* Categories */}
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Categories</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row">
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Home
              </Button>
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Catálogo general
              </Button>
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Ofertas Relampago
              </Button>
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Vestuario Hombre
              </Button>
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Vestuario Mujer
              </Button>
              <Button color="inherit" sx={{ fontSize: 13 }}>
                Profile
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <ScrollHide threshold={700}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ bgcolor: "white", color: "black", px: 15 }}>
          <SearchBar />
        </AppBar>
      </ScrollHide>
    </Box>
  );
};

export default Navbar;
