import React from 'react'

const ProductCard = ({id,title,amount,image,category}) => {
    return (
        <div className='bg-blue-950 rounded-md shadow-md'>
            <div className="w-full h-48 overflow-hidden rounded-t-md">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='flex flex-col text-white px-5 py-2'>
                <div className='flex items-center justify-between'>
                    <p className='text-lg font-bold'>{title}</p>
                    <span className='text-lg font-bold'>${amount}</span>
                </div >
                <div className='flex items-center justify-between'>
                    <span className='text-gray-400'>{category}</span>
                    {/* {isInCart ? <div className='flex items-center justify-center'>
                        <span className='bg-gray-200 text-black font-bold text-lg p-2 rounded-md cursor-pointer' onClick={() => handleQuantity(false, id, title)}>-</span>
                        <span className='p-2 font-bold text-lg'>{quantity}</span>
                        <span className='bg-gray-200 text-black font-bold text-lg p-2 rounded-md cursor-pointer' onClick={() => handleQuantity(true, id, title)}>+</span>
                    </div> : <button className='bg-gray-200 text-black text-lg p-2 rounded-md hover:bg-gray-800 hover:text-white cursor-pointer' onClick={addToCart}>Add</button>} */}
                    <button className='bg-gray-200 text-black text-lg p-2 rounded-md hover:bg-gray-800 hover:text-white cursor-pointer' >Add</button>

                </div>
            </div>
        </div>
    )
}

export default ProductCard
