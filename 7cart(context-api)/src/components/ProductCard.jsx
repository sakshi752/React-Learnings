import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext'

const ProductCard = ({ product }) => {

    const { cartItems, addToCart, handleQuantity, isInCart, getQuantity } = useCart();

    const [inCart, setInCart] = useState(false);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const data = isInCart(product.id);
        setInCart(data)
        if (data) {
            const quan = getQuantity(product.id)
            setQuantity(quan)
        }
    }, [cartItems])

    const add = () => {
        addToCart(product)
    }

    return (
        <div className='bg-blue-950 rounded-md shadow-md'>
            <div className="w-full h-48 overflow-hidden rounded-t-md">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='flex flex-col text-white px-5 py-2'>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-bold'>{product.title}</p>
                    <span className='text-lg font-bold'>${product.price}</span>
                </div >
                <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>{product.category}</span>
                    {inCart ? <div className='flex items-center justify-center'>
                        <span className='bg-gray-200 text-black font-bold text-lg p-2 rounded-md cursor-pointer' onClick={() => handleQuantity(false,product.id, product.title)}>-</span>
                        <span className='p-2 font-bold text-lg'>{quantity}</span>
                        <span className='bg-gray-200 text-black font-bold text-lg p-2 rounded-md cursor-pointer' onClick={() => handleQuantity(true, product.id, product.title)}>+</span>
                    </div> : <button className='bg-gray-200 text-black text-lg p-2 rounded-md hover:bg-gray-800 hover:text-white cursor-pointer' onClick={add}>Add</button>}


                </div>
            </div>
        </div>
    )
}

export default ProductCard
