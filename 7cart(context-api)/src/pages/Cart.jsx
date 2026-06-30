import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems,totalPrice } = useCart();

  return (
    <>
      {cartItems.length === 0 ?
        <div className='flex items-center justify-center'>
          <p className='text-2xl font-bold'>Your cart is empty!</p>
        </div> :
        <div className='w-[30%] flex flex-col gap-7'>
          <div>
            <p className='text-2xl font-bold text-white'>Your Cart</p>
          </div>
          <div className='flex flex-col gap-10'>
            {cartItems.map(item => {
              return (
                <CartItem key={item.id} item={item} />
              )
            })}
          </div>
          <div className='flex justify-between items-center bg-white text-black p-3 rounded-md text-xl font-bold tracking-wide'>
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>}
    </>
  )
}

export default Cart
