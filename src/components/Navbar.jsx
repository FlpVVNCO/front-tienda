import { AppBar, Box, Toolbar, Typography, Button, Stack } from "@mui/material";
import DrawerCart from "./DrawerCart";
import ScrollHide from "./utilities/ScrollHide";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    categoría: "Home",
    path: "/",
  },
  {
    id: 2,
    categoria: "Catálogo general",
    path: "/productos",
  },
  {
    id: 3,
    categoria: "Ofertas Relampago",
    path: "/productos",
  },

  {
    id: 4,
    categoria: "Vestuario Hombre",
    path: "/productos",
  },
  {
    id: 5,
    categoria: "Vestuario Mujer",
    path: "/productos",
  },
];

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <DrawerCart />

      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", color: "black", px: { xs: 0, sm: 5, xl: 20 } }}
      >
        <SearchBar />
        {/* Categories */}
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>Categorias</Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row">
              {categories.map((category) => (
                <Button key={category.id}>
                  <Typography
                    component={Link}
                    to={category.path}
                    sx={{ fontSize: 13, textDecoration: "none" }}
                  >
                    {category.categoria}
                  </Typography>
                </Button>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <ScrollHide threshold={700}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ bgcolor: "white", color: "black", px: 15 }}
        >
          <SearchBar />
        </AppBar>
      </ScrollHide>
    </Box>
  );
};

export default Navbar;
