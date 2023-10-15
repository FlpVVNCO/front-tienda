import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Icon,
  TextField,
  InputAdornment,
  Autocomplete,
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

const SearchBar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const { cart, setOpen, allProducts } = useProduct();

  const handleClick = () => {
    setOpen(true);
  };

  const searchProduct = allProducts.map((product) => product.name);

  return (
    <Toolbar>
      <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
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
          color="primary"
          sx={{ width: "500px" }}
          options={searchProduct}
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
  );
};

export default SearchBar;
