import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Icon,
  Input,
  TextField,
  InputAdornment,
  Autocomplete,
  ListItem,
  ListItemButton,
  List,
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

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const { cart, setOpen } = useProduct();

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerCart />
      <AppBar
        position="static"
        sx={{ bgcolor: "white", color: "black", px: 15, mt: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <BsMenuApp />
          </IconButton>

          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "black",
              fontSize: 16,
            }}>
            MYF
          </Typography>

          <Toolbar />
          <Box sx={{ flexGrow: 1 }}>
            <Autocomplete
              freeSolo
              disableClearable
              sx={{ width: "500px" }}
              options={["hola", "chao"]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                    sx: { borderRadius: 50, fontSize: 14 },
                    startAdornment: (
                      <InputAdornment position="start">
                        <BsSearch />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isAdmin ? null : isAuthenticated ? (
              <Icon onClick={handleClick} sx={{ mr: 1, cursor: "pointer" }}>
                {cart.length === 0 ? <BsCartPlus /> : <BsFillCartFill />}
              </Icon>
            ) : null}
            <Button
              component={Link}
              onClick={isAuthenticated ? logout : null}
              to={isAuthenticated ? "/" : "/login"}
              color="inherit">
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          </Box>
        </Toolbar>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Categories</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row">
              <Button color="inherit">HOME</Button>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">HOME</Button>
              <Button color="inherit">HOME</Button>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
