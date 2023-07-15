import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Icon,
} from "@mui/material";
import { BsMenuApp, BsFillCartFill, BsCartPlus } from "react-icons/bs";
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <BsMenuApp />
          </IconButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
          >
            Home
          </Typography>
          {isAdmin ? null : isAuthenticated ? (
            <Icon onClick={handleClick} sx={{ mr: 1, cursor: "pointer" }}>
              {cart.length === 0 ? <BsCartPlus /> : <BsFillCartFill />}
            </Icon>
          ) : null}
          <Button
            component={Link}
            onClick={isAuthenticated ? logout : null}
            to={isAuthenticated ? "/" : "/login"}
            color="inherit"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
