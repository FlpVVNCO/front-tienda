import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsCartPlus, BsEyeFill } from "react-icons/bs";
import { useProduct } from "../hooks/useProduct";
import { Box, Typography, Rating, Button } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";

const CarouselProduct = () => {
  const {
    allProducts,
    deleteProduct,
    getProduct,
    addCart,
    setOpen,
    setTransitionName,
    setImageSelected,
  } = useProduct();

  const navigate = useNavigate();

  const { isAdmin } = useAuth();

  function handleClick(e, id) {
    document.startViewTransition(() =>
      flushSync(() => {
        setTransitionName(e.target.style.viewTransitionName);
        setImageSelected(e.target.src);
        navigate(`/productos/${id}`);
      })
    );
  }

  const numero = 2;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel responsive={responsive}>
        {allProducts.map((product) => (
          <Box sx={{ p: 2 }} key={product._id}>
            <Box
              className="card-product"
              sx={{
                background: "#E3E9EF ",
                cursor: "pointer",
                position: "relative",
              }}>
              <img
                onClick={(e) => {
                  handleClick(e, product._id), getProduct(product._id);
                }}
                style={{ viewTransitionName: `product${product._id}` }}
                className="img-hover"
                src={`http://localhost:4000/api/${product.imageUrl}`}
                alt={`Producto ${product.name}`}
              />
              <Box
                className="icon-hover"
                sx={{
                  position: "absolute",
                  top: "20px",
                  right: "15px",
                }}>
                <BsCartPlus
                  color="gray"
                  fontSize="18px"
                  onClick={() => {
                    addCart(product), setOpen(true);
                  }}
                />
                <Box
                  className="icon-hover"
                  sx={{
                    position: "absolute",
                    top: "30px",
                  }}>
                  <BsEyeFill color="gray" fontSize="18px" />
                </Box>
              </Box>
            </Box>
            <Box textAlign="center" p>
              <Typography fontWeight="bold">{product.name}</Typography>
              <Typography fontWeight="bold">${product.price}</Typography>
              <Rating defaultValue={4.5} precision={0.5} size="small" />
              {isAdmin ? <Typography>{product.amount}</Typography> : null}
            </Box>
            {isAdmin ? (
              <Box>
                <Button component={Link} to={`/product/${product._id}`}>
                  Update
                </Button>
                <Button
                  onClick={() => {
                    deleteProduct(product._id);
                  }}>
                  Delete
                </Button>
              </Box>
            ) : null}
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
