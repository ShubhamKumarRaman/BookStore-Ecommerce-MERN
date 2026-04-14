import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import API from '../api/axios'

const Home = () => {

    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const fetchBooks = async () => {
        try {
            setLoading(true)
            const res = await API.get(`/books?page=${page}&limit=6`)
            setBooks(res.data.books || [])
        } catch (error) {
            setBooks([])
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [page])

    return (
        <section>
            <div className='section-head'>
                <h1>Discover Your Next Read</h1>
                <p>Curated picks for every kind of reader.</p>
            </div>

            {loading && <p className='state-text'>Loading books...</p>}

            {!loading && books.length === 0 && (
                <p className='state-text'>No books found for this page.</p>
            )}

            <div className='book-grid'>
                {books.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>

            <div className='pagination'>
                <button
                    className='btn btn-ghost'
                    disabled={page <= 1 || loading}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                >
                    Prev
                </button>
                <span className='page-pill'>Page {page}</span>
                <button
                    className='btn btn-primary'
                    disabled={loading}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </section>
    )
}

export default Home
