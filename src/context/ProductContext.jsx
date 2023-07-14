import { createContext, useState, useEffect } from "react";
import {
  createProductRequest,
  deleteProductRequest,
  getProductRequest,
  getAllProductsRequest,
  getProductsRequest,
  updateProductRequest,
} from "../api/product";
import CartItems from "../components/CartItems";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [anchorEl, setAnchorEL] = useState(null);

  const getProducts = async () => {
    const res = await getProductsRequest();
    setProducts(res.data);
  };

  const getAllProducts = async () => {
    const res = await getAllProductsRequest();
    setAllProducts(res.data);
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
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
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedItems);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
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
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCart(updatedItems);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart) ?? []);
  }, [cart]);

  return (
    <ProductsContext.Provider
      value={{
        createProduct,
        deleteProduct,
        getProducts,
        getProduct,
        updateProduct,
        getAllProducts,
        removeFromCart,
        addCart,
        setAnchorEL,
        anchorEl,
        products,
        allProducts,
        cart,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
