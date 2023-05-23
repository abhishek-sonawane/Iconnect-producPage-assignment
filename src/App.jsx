import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductPage from './components/ProductPage'
import ProductsListing from './components/ProductsListing'
import Error from './pages/Error'

function App() {

  return (
    <div>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsListing/>}  />
      <Route path='/:productID' element={<ProductPage/>} />
      <Route path='/404' element={<Error/>} />
      </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App