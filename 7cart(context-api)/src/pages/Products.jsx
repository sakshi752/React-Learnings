import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 10,
      image: "/images/img1.jpg",
      description: "High quality wireless headphones with noise cancellation",
      category: "electronics",
    },
    {
      id: 2,
      title: "Running Shoes",
      price: 2999,
      image: "/images/img1.jpg",
      description: "Comfortable running shoes for daily workouts",
      category: "fashion",
    },
    {
      id: 3,
      title: "Smart Watch",
      price: 4999,
      image: "/images/img1.jpg",
      description: "Track your fitness and notifications",
      category: "electronics",
    },
    {
      id: 4,
      title: "Backpack",
      price: 999,
      image: "/images/img1.jpg",
      description: "Durable backpack for travel and office",
      category: "accessories",
    },
    {
      id: 5,
      title: "Backpack",
      price: 999,
      image: "/images/img1.jpg",
      description: "Durable backpack for travel and office",
      category: "accessories",
    }
  ]);
  return (
    <div className='grid grid-cols-4  gap-5 '>
      {products.map(product => {
        return (
          <ProductCard key={product.id} id={product.id} title={product.title} amount={product.price} image={product.image} category={product.category} />
        )
      })}
    </div>
  )
}

export default Products
