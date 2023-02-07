import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free Shipping over $100 and Free returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>Hotline: <a className='text-white' href="tel:+880 145454843442">+880 145454843442</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;