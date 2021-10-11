import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='sections'>
                <div className='puellae'>
                    <i class="fas fa-venus"></i>
                </div>
                <div className='pueri'>
                    <i class="fas fa-mars"></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
