"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for a cart item
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity:number;
};

// Define the type for the cart context
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Updated Add to Cart function to handle quantity
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // ✅ If product exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // ✅ If product is new, add it with quantity: 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ Remove from Cart Function (Decreases quantity or removes)
  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity reaches 0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
