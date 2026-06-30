import React from 'react'
import { IoAdd } from 'react-icons/io5'
import { RiSubtractFill } from 'react-icons/ri'
import { useCart } from '../contexts/CartContext';
import { MdCancel } from 'react-icons/md';

const CartItem = ({item}) => {
  const {  handleQuantity, isInCart, getQuantity,removeFromCart } = useCart();
  
  const remove = ()=>{
    removeFromCart(item.id,item.title)
  }

  return (
    <div className='bg-blue-950  flex rounded-md text-white shadow-lg'>
      <div className='w-[30%] h-32'>
        <img src={item.image} alt="" className="w-full h-full object-cover rounded-l-md" />

      </div>
      <div className='flex flex-col w-[70%] pt-4 px-3'>

        <div className='flex justify-between text-xl font-bold '>
          <span className=''>{item.title}</span>
          <MdCancel size={30} className='mb-1 cursor-pointer text-pink-300' onClick={remove} />
        </div>
        <div className='flex justify-between items-center'>

          <div className="flex items-center gap-2">
            <button
              className="w-7 h-7 flex items-center justify-center bg-white text-black rounded cursor-pointer text-xl font-bold"
              onClick={() => handleQuantity(false,item.id, item.title)}
            >
              <RiSubtractFill />
            </button>

            <span className="min-w-6 text-center font-semibold">
              {item.quantity}
            </span>

            <button
              className="w-7 h-7 flex items-center justify-center bg-white text-black rounded cursor-pointer"
              onClick={() => handleQuantity( true,item.id, item.title)}
            >
              <IoAdd />
            </button>
          </div>
          <span>${item.price}</span>
        </div>
      </div>

    </div>
  )
}

export default CartItem
