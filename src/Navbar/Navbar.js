import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='sections'>
                <Link to='/Pullae'>
                    <div className='puellae'>
                        <i class="fas fa-venus">Puellae</i>
                    </div>
                </Link>
                <Link to='/Pueri'>
                    <div className='pueri'>
                        <i class="fas fa-mars">Pueri</i>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
