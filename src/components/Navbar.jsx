import React from 'react'
const Navbar = () => {
    return (
        <div className='nav'>
            <h1 className='color-change'>Travlog</h1>
            <ul className='nav1'>
                <li className='nav2'>Home</li>
                <li className='nav2'>About</li>
                <li className='nav2'>Destinations</li>
                <li className='nav2'>Packages</li>
                <li className='nav2'>Blog</li>
                <li className='nav2'>Contact</li>
            </ul>
            <div className="auth-buttons">
                <a href="#login">Log In</a>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar