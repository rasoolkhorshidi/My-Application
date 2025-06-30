import { createContext } from "react";
import { useState } from "react";

interface IShopingCartProvider {
  children: React.ReactNode;
}

interface IShopingCartContext {
    CartItems: [];  
}   

export const ShopingCartContext = createContext<IShopingCartContext>({
    CartItems: [],
});

export function ShopingCartProvider({ children }: IShopingCartProvider) {
    const [CartItems, setCartItems] = useState<[]>([]);
  return (
    <ShopingCartContext.Provider value={{CartItems}}>
      {children}
    </ShopingCartContext.Provider>
  );
}