import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/axios'

const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
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
            await API.post('/auth/register', form)
            setMessage('Registered successfully. You can now login.')
            setTimeout(() => navigate('/login'), 700)
        } catch (err) {
            setError(err?.response?.data?.message || 'Registration failed. Please retry.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='auth-wrap'>
            <form onSubmit={handleSubmit} className='form-card'>
                <h2>Create Account</h2>
                <p className='muted'>Join and build your personalized shelf.</p>

                <input
                    placeholder='Name'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />

                {message && <p className='success-text'>{message}</p>}
                {error && <p className='error-text'>{error}</p>}

                <button className='btn btn-primary' disabled={loading}>
                    {loading ? 'Registering...' : 'Register'}
                </button>

                <p className='muted'>
                    Already have an account? <Link to='/login'>Login</Link>
                </p>
            </form>
        </section>
    )
}

export default Register
