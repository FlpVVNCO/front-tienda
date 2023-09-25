import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Divider,
  Collapse,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useProduct } from "../hooks/useProduct";
const Filters = () => {
  const { getProductGenre, getAllProducts, setFilters, filters } = useProduct();

  // mantener el codigo limpio.
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    if (Object.keys(filters.genre).length > 0) {
      getProductGenre();
    } else {
      getAllProducts();
    }
  }, [filters]);

  const handleCheckboxChange = (filterName, filterValue) => {
    if (filterName === "genre") {
      // Verifica si el género ya está en el array
      const updatedGenre = filters.genre.includes(filterValue)
        ? filters.genre.filter((genre) => genre !== filterValue) // Si está, quítalo
        : [...filters.genre, filterValue]; // Si no está, agrégalo

      setFilters({ ...filters, genre: updatedGenre });
    } else {
      setFilters({ ...filters, [filterName]: filterValue });
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography variant="h1" fontSize={22}>
          Filtros
        </Typography>

        {!checked ? (
          <FiPlus style={{ cursor: "pointer" }} onClick={handleCheck} />
        ) : (
          <FiMinus style={{ cursor: "pointer" }} onClick={handleCheck} />
        )}
      </Box>
      <Divider />
      {/* Transición */}
      <Collapse in={checked}>
        <Box
          sx={{
            display: "flex",
            flexFlow: { xs: "row wrap", sm: "column wrap" },
            gap: 1,
            mb: 2,
            p: 2,
          }}
        >
          <FormControl>
            <FormLabel color="success">Género</FormLabel>

            <FormControlLabel
              control={
                <Checkbox
                  value="hombre"
                  name="hombre"
                  color="secondary"
                  sx={{ borderRadius: 50 }}
                  onChange={() => handleCheckboxChange("genre", "hombre")}
                />
              }
              label="Hombre"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="mujer"
                  name="mujer"
                  color="secondary"
                  onChange={() => handleCheckboxChange("genre", "mujer")}
                />
              }
              label="Mujer"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="niño"
                  name="niño"
                  color="secondary"
                  onChange={() => handleCheckboxChange("genre", "niño")}
                />
              }
              label="Niño"
            />
            <FormLabel color="success" id="demo-radio-buttons-group-label">
              Color
            </FormLabel>
          </FormControl>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Filters;
