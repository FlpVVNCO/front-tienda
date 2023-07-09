import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProduct } from "../hooks/useProduct";
import { useNavigate, useParams } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";

const FormProduct = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const { createProduct, updateProduct, getProduct } = useProduct();

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const product = await getProduct(params.id);
        setValue("name", product.name);
        setValue("price", product.price);
        setValue("amount", product.amount);
        setValue("description", product.description);
      }
    };
    loadProduct();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateProduct(params.id, data);
    } else {
      createProduct(data);
    }

    navigate("/product");
  });
  return (
    <Box component="form" onSubmit={onSubmit}>
      <Box
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}>
        <TextField
          sx={{ mt: 2 }}
          type="text"
          placeholder="name"
          autoFocus
          size="small"
          {...register("name")}
          fullWidth
        />
        <TextField
          sx={{ mt: 2 }}
          type="number"
          placeholder="price"
          autoFocus
          size="small"
          {...register("price", {
            valueAsNumber: true,
          })}
          fullWidth
        />
        <TextField
          sx={{ mt: 2 }}
          type="number"
          placeholder="amount"
          autoFocus
          size="small"
          {...register("amount", {
            valueAsNumber: true,
          })}
          fullWidth
        />
        <TextField
          sx={{ mt: 2 }}
          size="small"
          multiline
          rows={10}
          fullWidth
          placeholder="description"
          {...register("description")}
        />
        <Button sx={{ mt: 2 }} variant="contained" fullWidth type="submit">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FormProduct;
