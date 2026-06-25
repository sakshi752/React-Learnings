import { Children, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingProduct = prev.find(item => item.id === product.id);

            if (existingProduct) {
                return prev.map(item => {
                    return item.id === product.id ?
                        { ...item, quantity: item.quantity + 1 } : item;
                })
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1
                }
            ]
        })

        toast.success(`${product.title} added to cart 🛒`)
    }

    const removeFromCart = (productId,title) => {
        setCartItems(prev=>{
            return prev.filter(item=>item.id!=productId)
        })
        toast.success(`${title} is removed from cart 🛒`);
     }

    const handleQuantity = (isInc, productId, title) => {
        const existingItem = cartItems.find(item => item.id === productId)

        if (isInc) {
            toast.success(`${title} quantity is increased 🛒`);

            setCartItems(prev => prev.map(item => item.id === productId ?
                {
                    ...item,
                    quantity: item.quantity + 1
                } : item
            )
            )
            return
        }

        if (existingItem.quantity === 1) {
            toast.success(`${title} is removed from cart 🛒`);

            setCartItems(prev => prev.filter(item => item.id != productId))
            return;
        }

        toast.success(`${title} quantity is decreased 🛒`);

        setCartItems(prev => prev.map(item => item.id === productId ? {
            ...item,
            quantity: item.quantity - 1
        } : item))
    }

    const clearCart = () => { 
        toast.success(`Your cart is empty 🛒`);
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            handleQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

