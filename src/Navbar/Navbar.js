import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='sections'>
                <div className='puellae'>
                    <i class="fas fa-venus">Puellae</i>
                </div>
                <div className='pueri'>
                    <i class="fas fa-mars">Pueri</i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
