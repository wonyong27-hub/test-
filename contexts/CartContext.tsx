'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface CartItem {
  id: string
  brand: string
  name: string
  currentPrice: string
  originalPrice: string
  discountRate: string
  image: string
  size?: string
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const getItemId = (item: CartItem) => {
    return `${item.id}-${item.size || 'default'}`
  }

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const itemId = getItemId(item)
      const existingItem = prevItems.find((prevItem) => 
        getItemId(prevItem) === itemId
      )
      
      if (existingItem) {
        return prevItems.map((prevItem) =>
          getItemId(prevItem) === itemId
            ? { ...prevItem, quantity: prevItem.quantity + item.quantity }
            : prevItem
        )
      }
      
      return [...prevItems, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => getItemId(item) !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        getItemId(item) === id ? { ...item, quantity } : item
      )
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.currentPrice.replace(/[^0-9]/g, ''))
      return total + price * item.quantity
    }, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

