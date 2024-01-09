import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-items'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;