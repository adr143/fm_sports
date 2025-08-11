import React, { useEffect, useState, createContext, useContext } from 'react';
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: number;
  color: string;
}
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, size: number, color: string) => void;
  updateQuantity: (id: string, size: number, color: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('fmCart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Error parsing stored cart:', error);
        localStorage.removeItem('fmCart');
      }
    }
  }, []);
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('fmCart', JSON.stringify(items));
  }, [items]);
  const addItem = (newItem: CartItem) => {
    setItems(prevItems => {
      // Check if the item with the same ID, size, and color already exists
      const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color);
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, newItem];
      }
    });
  };
  const removeItem = (id: string, size: number, color: string) => {
    setItems(prevItems => prevItems.filter(item => !(item.id === id && item.size === size && item.color === color)));
  };
  const updateQuantity = (id: string, size: number, color: string, quantity: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id && item.size === size && item.color === color) {
        return {
          ...item,
          quantity
        };
      }
      return item;
    }));
  };
  const clearCart = () => {
    setItems([]);
  };
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return <CartContext.Provider value={{
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal
  }}>
      {children}
    </CartContext.Provider>;
};
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};