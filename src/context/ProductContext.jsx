import { createContext, useState } from "react";
import {
  createProductRequest,
  deleteProductRequest,
  getProductRequest,
  getAllProductsRequest,
  getProductsRequest,
  updateProductRequest,
} from "../api/product";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async () => {
    const res = await getProductsRequest();
    setProducts(res.data);
  };

  const getAllProducts = async () => {
    const res = await getAllProductsRequest();
    console.log(res.data);
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
        setProducts(products.filter((product) => product._id !== id));
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

  return (
    <ProductsContext.Provider
      value={{
        createProduct,
        deleteProduct,
        getProducts,
        getProduct,
        updateProduct,
        getAllProducts,
        products,
        allProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
