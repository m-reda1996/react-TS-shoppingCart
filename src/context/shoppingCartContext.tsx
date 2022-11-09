import { createContext, ReactNode, useContext, useState } from "react";
type shoppingCartporviderProp = {
  children: ReactNode;
};

type shoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  gitItemsQuantity: (id: number) => number;
  increaseItemsQuantity: (id: number) => void;
  decreaseItemsQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: cartItem[];
};

type cartItem = {
  id: number;
  name: string;
  quantity: number;
};

const ShoppingcartContext = createContext({} as shoppingCartContext);

export function UseshoppingCart() {
  return useContext(ShoppingcartContext);
}

export function ShoppingCartProvider({ children }: shoppingCartporviderProp) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  const [isOpen , setIsOpen] = useState(false) 
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function gitItemsQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseItemsQuantity(id: number) {
    setCartItems((cuurItems) => {
      if (cuurItems.find((item) => item.id === id) == null) {
        return [...cuurItems, { id, quantity: 1 }];
      } else {
        return cuurItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseItemsQuantity(id: number) {
    setCartItems((cuurItems) => {
      if (cuurItems.find((item) => item.id === id)?.quantity === 1) {
        return cuurItems.filter((item) => item.id !== id);
      } else {
        return cuurItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingcartContext.Provider
      value={{
        gitItemsQuantity,
        increaseItemsQuantity,
        decreaseItemsQuantity,
        removeFromCart,
        cartQuantity, 
        cartItems,
        openCart,
        closeCart
      }}
    >
      {children}
    </ShoppingcartContext.Provider>
  );
}
