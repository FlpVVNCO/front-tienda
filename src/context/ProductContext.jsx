import { createContext, useState, useEffect } from "react";
import {
  createProductRequest,
  deleteProductRequest,
  getProductRequest,
  getAllProductsRequest,
  getProductsByGenre,
  getProductsRequest,
  updateProductRequest,
} from "../api/product";
import { createImageRequest, getImageRequest } from "../api/image";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filters, setFilters] = useState({
    genre: [],
  });
  const [open, setOpen] = useState(false);
  const [transitionName, setTransitionName] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  // const getProducts = async () => {
  //   const res = await getProductsRequest();
  //   setProducts(res.data);
  // };

  const getAllProducts = async () => {
    const res = await getAllProductsRequest();
    setAllProducts(res.data);
  };

  const getProductGenre = async () => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      console.log(queryParams);
      const res = await getProductsByGenre(queryParams);
      console.log(res);
      setAllProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createProduct = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price); // Convertir a número
      formData.append("amount", data.amount);
      formData.append("genre", data.genre);
      formData.append("image", image);

      const res = await createProductRequest(formData);
    } catch (error) {
      console.error(error);
    }
  };

  const createImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      console.log(formData);
      const res = await createImageRequest(formData);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 204)
        setAllProducts(allProducts.filter((product) => product._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id);
      setProduct(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async (id, product) => {
    try {
      await updateProductRequest(id, product);
    } catch (error) {
      console.error(error);
    }
  };

  const addCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      const updatedItems = cart.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
            total: (item.quantity + 1) * item.price,
          };
        }
        return item;
      });
      setCart(updatedItems);
    } else {
      setCart([...cart, { ...product, quantity: 1, total: product.price }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedItems = cart.filter((item) => item._id !== product._id);
        setCart(updatedItems);
      } else {
        const updatedItems = cart.map((item) => {
          if (item._id === product._id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              total: (product.quantity - 1) * product.price,
            };
          }
          return item;
        });
        setCart(updatedItems);
      }
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const getImages = async () => {
    try {
      const res = await getImageRequest();
      setImages(res.data.images);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart) ?? []);
  }, [cart]);

  useEffect(() => {
    getImages();
    getAllProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        createProduct,
        deleteProduct,
        getProduct,
        updateProduct,
        getAllProducts,
        getProductGenre,
        removeFromCart,
        addCart,
        setOpen,
        handleFileChange,
        createImage,
        setTransitionName,
        setImageSelected,
        setGenre,
        setFilters,
        filters,
        open,
        genre,
        product,
        allProducts,
        cart,
        images,
        image,
        transitionName,
        imageSelected,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
