import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const priceMap = { '$': 5.99, '$$': 9.99, '$$$': 14.99, '$$$$': 19.99 };

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (item, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i);
      }
      return [...prev, { ...item, quantity }];
    });
    showToast(`${item.name} agregado al carrito`);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCartItems(prev => prev.filter(i => i.id !== id));
      return;
    }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity } : i));
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (priceMap[item.price] || 0) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, toast }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
