import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";

export const useProduct = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
};
