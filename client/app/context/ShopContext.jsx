"use client";
import React, { createContext } from "react";
import all_product from "../components/Assets/all_product";

const ShopContext = createContext();
const contextValue = { all_product };
const ShopContextProvider = ({ children }) => {
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext ,ShopContextProvider};
