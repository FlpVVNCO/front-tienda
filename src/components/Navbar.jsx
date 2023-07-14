import {
  AppBar,
  Box,
  IconButton,
  Menu,
  Toolbar,
  Typography,
  Button,
  Icon,
  Popover,
  Paper,
} from "@mui/material";
import { BsMenuApp, BsFillCartFill, BsCartPlus } from "react-icons/bs";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartItems from "./CartItems";
import { useProduct } from "../hooks/useProduct";
import PopoverCart from "./PopoverCart";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const { setAnchorEL, cart } = useProduct();

  const handleClick = (event) => {
    setAnchorEL(event.currentTarget);
  };
  [];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <PopoverCart />
      <AppBar position="static">
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
            sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}>
            Home
          </Typography>
          <Icon onClick={handleClick} sx={{ mr: 1, cursor: "pointer" }}>
            {cart.length === 0 ? <BsCartPlus /> : <BsFillCartFill />}
          </Icon>
          <Button
            component={Link}
            onClick={isAuthenticated ? logout : null}
            to={isAuthenticated ? "/" : "/login"}
            color="inherit">
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
