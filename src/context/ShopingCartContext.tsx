import { createContext, useContext } from "react";
import { useState } from "react";

interface IShopingCartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface IShopingCartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
}

export const ShopingCartContext = createContext({} as IShopingCartContext);

export const useShopingCartContext = () => {
  const context = useContext(ShopingCartContext);
  if (!context) {
    throw new Error(
      "useShopingCartContext must be used within a ShopingCartProvider"
    );
  }
  return context;
};

export function ShopingCartProvider({ children }: IShopingCartProvider) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItem) => {
      let selectedItem = currentItem.find((item) => item.id == id);
      if (selectedItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };
  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id != id);
    });
  };
  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
