import { createContext, useState, useEffect, useReducer } from "react";
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
import { cartReducer, cartInitialState } from "../reducers/cart";

export const ProductsContext = createContext();

const useCartReducer = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  return { cartState, addToCart, removeFromCart };
};

export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [genre, setGenre] = useState([]);
  const [filters, setFilters] = useState({
    genre: [],
  });
  const [open, setOpen] = useState(false);
  const [transitionName, setTransitionName] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const { cartState, addToCart, removeFromCart } = useCartReducer();

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
    localStorage.setItem("cartItems", JSON.stringify(cartState) ?? []);
  }, [cartState]);

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
        addToCart,
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
        cart: cartState,
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
