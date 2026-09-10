import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const reorder = (items) => {
    setCart((currentCart) => {
      let updatedCart = [...currentCart];

      items.forEach((product) => {
        const existingProduct = updatedCart.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          updatedCart = updatedCart.map((item) =>
            item.id === product.id
              ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
              : item
          );
        } else {
          updatedCart.push({
            ...product,
            quantity: product.quantity,
          });
        }
      });

      return updatedCart;
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartQuantity,
        cartTotal,
        reorder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}