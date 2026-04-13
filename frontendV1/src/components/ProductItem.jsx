import React, { useContext } from 'react'
import { itemContext } from '../context/ItemContext'

const ProductItem = ({product}) => {
    const { addToCart, removeFromCart } = useContext(itemContext);

    const handleAddToCart = (product) => {
        console.log(product);
        addToCart(product);
    }

    const handleRemoveToCart = (product) => {
        console.log("Product removed", product);
        removeFromCart(product);
    }
    return (
        <div className='flex justify-center'>
            <div className='bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition duration-300 transform hover:scale-105 w-full max-w-xs'>
                <div className='relative overflow-hidden bg-gray-200 h-64 w-full'>
                    <img
                        className='w-full h-full object-cover'
                        src={product.image}
                        alt={product.title}
                    />
                    <div className='absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold'>
                        {product.genre}
                    </div>
                </div>

                <div className="p-4 flex flex-col justify-between h-64">
                    <div>
                        <h3 className='text-lg font-bold text-gray-900 mb-2 line-clamp-2'>{product.title}</h3>
                        <p className='text-sm text-gray-600 mb-2 line-clamp-3'>{product.description}</p>
                    </div>
                    
                    <div>
                        <p className='text-lg font-bold text-blue-600 mb-1'>₹{product.price}</p>
                        <p className='text-sm text-amber-700 font-semibold mb-4'>✍️ {product.author}</p>
                        
                        <div className='flex gap-2 w-full'>
                            <button 
                                onClick={() => handleAddToCart(product)}
                                className='flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-lg transition duration-200 transform hover:scale-105'
                            >
                                🛒 Add
                            </button>
                            <button 
                                onClick={() => handleRemoveToCart(product)}
                                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105'
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
