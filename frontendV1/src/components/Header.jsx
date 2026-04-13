import React, { useContext } from 'react'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { itemContext } from '../context/ItemContext'

const Header = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);
    return (
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg w-full'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-6'>
                    <div className='flex items-center'>
                        <h1 className='text-4xl font-bold text-white tracking-wider'>📚 BookStore</h1>
                    </div>
                    <div className='flex items-center justify-end gap-8'>
                        <div className='text-right'>
                            <p className='text-sm text-blue-100'>Total Price</p>
                            <p className='text-3xl font-bold text-green-300'>₹{totalPrice.toFixed(2)}</p>
                        </div>
                        <div className='relative'>
                            <div className='bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-2 -right-2 text-sm font-bold'>
                                {itemsInCart}
                            </div>
                            <FontAwesomeIcon icon={faCartShopping} size="2x" className='text-yellow-300' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
