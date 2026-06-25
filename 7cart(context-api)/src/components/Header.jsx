import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between items-center px-7 py-5'>
      <p className='text-2xl font-bold tracking-wider'>Cartify</p>
      <Link to={"/"}>
      Products
      </Link>
      <Link to={"/cart"} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors" to={"/cart"}>
        Cart
      </Link>
    </nav>
  )
}

export default Header
