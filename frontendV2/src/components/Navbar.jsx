import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    return (
        <header className='navbar-wrap'>
            <nav className='navbar'>
                <Link to='/' className='brand'>
                    <span className='brand-mark'>BOOK</span>
                    <span className='brand-name'>NEST</span>
                </Link>

                <div className='nav-links'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/add' className='nav-link'>Add Book</NavLink>
                    {!user && <NavLink to='/login' className='nav-link'>Login</NavLink>}
                    {!user && <NavLink to='/register' className='nav-link'>Register</NavLink>}
                    {user && (
                        <button className='btn btn-ghost' onClick={logout}>
                            Logout
                        </button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
