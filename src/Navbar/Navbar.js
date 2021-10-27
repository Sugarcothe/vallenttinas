import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='sections'>
                <div className='puellae'>
                    <Link to='/Pullae'>
                        <i class="fas fa-venus">Puellae</i>
                    </Link>
                </div>
                <div className='pueri'>
                    <Link to='/Pueri'>
                        <i class="fas fa-mars">Pueri</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
