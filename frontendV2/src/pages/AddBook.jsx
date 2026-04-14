import React, { useState } from 'react'
import API from '../api/axios'

const AddBook = () => {
    const [form, setForm] = useState({
        title: '',
        author: '',
        price: '',
        image: ''
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        setError('')

        try {
            setLoading(true)
            await API.post('/books', form)
            setMessage('Book added successfully.')
            setForm({ title: '', author: '', price: '', image: '' })
        } catch (err) {
            setError(err?.response?.data?.message || 'Could not add book. Try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='auth-wrap'>
            <form onSubmit={handleSubmit} className='form-card'>
                <h2>Add New Book</h2>
                <p className='muted'>Keep your collection fresh and discoverable.</p>

                <input
                    placeholder='Title'
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                />
                <input
                    placeholder='Author'
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    required
                />
                <input
                    type='number'
                    min='0'
                    placeholder='Price'
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                />
                <input
                    type='url'
                    placeholder='Cover Image URL (optional)'
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                />

                {message && <p className='success-text'>{message}</p>}
                {error && <p className='error-text'>{error}</p>}

                <button className='btn btn-primary' disabled={loading}>
                    {loading ? 'Adding...' : 'Add Book'}
                </button>
            </form>
        </section>
    )
}

export default AddBook
