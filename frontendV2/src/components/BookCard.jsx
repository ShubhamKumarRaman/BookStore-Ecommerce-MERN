import React from 'react'

const BookCard = ({ book }) => {
    const fallback = 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80'

    return (
        <article className='book-card'>
            <div className='book-cover-wrap'>
                <img
                    src={book.image || fallback}
                    alt={book.title}
                    className='book-cover'
                    onError={(e) => {
                        e.currentTarget.src = fallback
                    }}
                />
            </div>
            <div className='book-content'>
                <h3>{book.title}</h3>
                <p className='author'>By {book.author}</p>
                <p className='price'>Rs. {Number(book.price || 0).toLocaleString()}</p>
            </div>
        </article>
    )
}

export default BookCard
