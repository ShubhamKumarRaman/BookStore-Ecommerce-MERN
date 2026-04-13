import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import CustomItemContext from './context/ItemContext'

const App = () => {
  return (
    <CustomItemContext>
      <div className='bg-gray-50 min-h-screen'>
        <Header />
        <ProductList />
      </div>
    </CustomItemContext>
  )
}

export default App
