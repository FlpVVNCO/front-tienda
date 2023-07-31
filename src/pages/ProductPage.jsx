import { useProduct } from "../hooks/useProduct";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import CardItems from "../components/CardItems";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { getAllProducts } = useProduct();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box>
      <CardItems />
      <Button component={Link} to="/add-product">
        AÑADIR UN PRODUCTO
      </Button>
      {/* <form onSubmit={handleSubmit(createImage)}>
        <input type="file" {...register("image")} onChange={handleFileChange} />
        <button type="submit">Subir</button>
      </form>
      <div>
        {images.map((image) => (
          <div key={image._id}>
            <img
              src={`http://localhost:4000/api/${image.imageUrl}`}
              alt={image.name}
            />
            <p>{image.name}</p>
          </div>
        ))}
      </div> */}
    </Box>
  );
};

export default ProductPage;
