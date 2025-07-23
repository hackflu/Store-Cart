import React, { createContext, useContext, useState } from "react";
import { CartBlock } from "../components/CartBlock";
type ShoppingCartContext = {
  openCart : ()=> void
  closeCart: ()=> void
  getItemsQuantity: (id : number)=> number
  increaseCartQuantity : (id : number) => void
  decreaseCartQuantity : (id : number) => void
  removeFromCart: (id: number) => void
  cartQuantity : number
  cartItems : CartItems[]
}

type CartItems = {
  id: number
  quantity : number
}

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems ,setItems] = useState<CartItems[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const cartQuantity = cartItems.reduce((quantity , items) => items.quantity + quantity , 0)

  const openCart =  () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  
  function getItemsQuantity(id : number){
    return cartItems.find(item => item.id === id)?.quantity || 0 
  }

  function increaseCartQuantity(id: number){
  setItems(cartItems => {
    const checkExistense = cartItems.find(item => item.id === id)
    if(!checkExistense){
      return [...cartItems , {id , quantity : 1}]
    }else {
      return cartItems.map(items => items.id === id ? {id , quantity : items.quantity + 1} : items)
    }
  })
  }

  function decreaseCartQuantity(id : number) {
    setItems(cartItems => {
    const checkExistense = cartItems.find(item => item.id === id)?.quantity == 1
    if(!checkExistense){
      return cartItems.filter(items => items.id !== id)
    }else {
      return cartItems.map(items => items.id === id ? {id , quantity : items.quantity - 1} : items)
    }
  })
  }

  function removeFromCart(id : number){
    setItems(
      cartItems => {
        return cartItems.filter(items => items.id !== id)
      }

    )
  }
  return (
    <ShoppingCartContext.Provider value={{getItemsQuantity , decreaseCartQuantity , increaseCartQuantity, removeFromCart,cartItems,cartQuantity,openCart,closeCart}}>
      {children}
      <CartBlock isOpen={isOpen} close={closeCart}/>

    </ShoppingCartContext.Provider>
  );
}
