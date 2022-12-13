import React from 'react';
import './header.css'
import search from '../../assets/img/icons/search.svg'

function Header() {
    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header_item'>
                        <h1 className='header_logo'>Weather</h1> 
                    </div>
                    <div className='search'>
                            <img className='header_search_img' src={search} alt="" />
                            <input className='header_search_input' type="search"  placeholder=' Search for a city'/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;