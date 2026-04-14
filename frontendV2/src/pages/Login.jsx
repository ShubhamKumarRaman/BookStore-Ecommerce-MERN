import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/axios'

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: '' })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            setLoading(true)
            const res = await API.post('/auth/login', form)
            login(res.data)
            navigate('/')
        } catch (err) {
            setError(err?.response?.data?.message || 'Login failed. Try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='auth-wrap'>
            <form onSubmit={handleSubmit} className='form-card'>
                <h2>Welcome Back</h2>
                <p className='muted'>Login to add and manage your books.</p>

                <input
                    type='email'
                    value={form.email}
                    placeholder='Email'
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    type='password'
                    value={form.password}
                    placeholder='Password'
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />

                {error && <p className='error-text'>{error}</p>}

                <button className='btn btn-primary' disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>

                <p className='muted'>
                    New here? <Link to='/register'>Create an account</Link>
                </p>
            </form>
        </section>
    )
}

export default Login

