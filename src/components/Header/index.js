import React from 'react';
import './header.css'

function Header() {
    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header_item'>
                        <h1 className='header_logo'>Weather</h1> 
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;