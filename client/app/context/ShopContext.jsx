"use client";
import React, { createContext, useReducer, useState } from "react";
import all_product from "../components/Assets/all_product";
// import reducer from "./reducer";
const getDefaltCart = ()=>{
   const cartArr=[];
   for (let index = 0; index < all_product.length; index++) {
       cartArr[index]=0;
    
   }
   return cartArr;
}
// const initialState ={
    
// }
const ShopContext = createContext();
const ShopContextProvider = ({ children }) => {
  // const [state,dispach] = useReducer(reducer,initialState);
  const [itemCarts,setItemCarts]=useState(getDefaltCart());
  const [new_arr, setNewarr] = useState(all_product);
  const increse = (id) => {
    const newCartItems = new_arr.map((item) => {
      if ((item.id)===(id)) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
      
    });
    setNewarr(newCartItems);
  };
  const decrease = (id) => {
    const newCartItems = new_arr.map((item) => {
      if (item.id === id) {
        // Only decrement if quantity exists and is greater than 1
        return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
      }
      return item;
    });
    setNewarr(newCartItems);
  };
  const addToCart =(productId)=>{
     setItemCarts((prev)=>({...prev,[productId]:prev[productId]++}))
     
      
  }
  const removeToCart =(productId)=>{
    setItemCarts((prev)=>({...prev,[productId]:prev[productId]--}))
     
  }
  const getTotalCartAmount =()=>{
      let totalAmount=0;
      for(const item in itemCarts){
          if(itemCarts[item]>0){
              let iteminfo=new_arr.find((product)=>product.id===Number(item))
              if(iteminfo.quantity===undefined){
                totalAmount+=iteminfo.new_price;
              }else{
                totalAmount+=iteminfo.new_price*iteminfo.quantity;
              }
              
          }
      }
      
      return totalAmount;
  }
  const lencart =()=>{
      let len=0;
      for(const item in itemCarts){
          if(itemCarts[item]>0){
              len++;
          }
      }
      return len;
  }
  const contextValue = {all_product,addToCart,itemCarts,removeToCart,getTotalCartAmount,lencart,increse,decrease,new_arr};
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext ,ShopContextProvider};
