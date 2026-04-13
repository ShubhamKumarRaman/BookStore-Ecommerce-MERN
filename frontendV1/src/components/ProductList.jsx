import React, { useContext, useEffect, useState } from 'react'
import { itemContext } from '../context/ItemContext'
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products } = useContext(itemContext);
    //Keep a local state for sorted products
    const [sortedProducts, setSortedProducts] = useState([...products]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);

    //All represents no type filter
    const [selectedType, setSelectedType] = useState("all")

    useEffect(() => {
        setSortedProducts([...products]);
    }, [products]);

    const handleSortByPrice = () => {
        const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        setSortedProducts(sorted);
    }

    const handleFilterByPriceRange = () => {
        const filtered = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        )
        setSortedProducts(filtered);
    }

    const handleFilterByType = () => {
        if (selectedType === "all") {
            setSortedProducts([...products]);
        } else {
            const filtered = products.filter(
                (product) => product.genre === selectedType
            );
            setSortedProducts(filtered);
        }
    }

    return (
        <div className='min-h-screen bg-gray-50 py-12 w-full'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-4xl font-bold text-gray-900 mb-12 text-center w-full'>📖 Explore Our Collection</h2>
                
                <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <button 
                            onClick={handleSortByPrice}
                            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105'
                        >
                            ↕️ Sort by Price
                        </button>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Min Price</label>
                            <input
                                type='number'
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                        
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Max Price</label>
                            <input
                                type='number'
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                        
                        <button 
                            onClick={() => handleFilterByPriceRange()}
                            className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105'
                        >
                            💰 Filter Price
                        </button>
                    </div>
                    
                    <div className='mt-4 flex flex-col md:flex-row gap-4'>
                        <div className='flex-1'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Filter by Genre</label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            >
                                <option value="all">All Genres</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Dystopian">Dystopian</option>
                            </select>
                        </div>
                        <button 
                            onClick={handleFilterByType}
                            className='bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 transform hover:scale-105 md:self-end'
                        >
                            🎯 Filter
                        </button>
                    </div>
                </div>
                
                <div className='w-full flex justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
                        {sortedProducts.map((product) => (
                            <ProductItem key={product._id} product={product} />
                        ))}
                    </div>
                </div>
                
                <div className='flex justify-center mt-12'>
                    <button className='bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-4 px-12 rounded-lg transition duration-200 transform hover:scale-105 text-lg shadow-lg'>
                        🛍️ Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductList
