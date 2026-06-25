import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Products/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Route>
  )
)
 
createRoot(document.getElementById('root')).render(
    <StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>
)
