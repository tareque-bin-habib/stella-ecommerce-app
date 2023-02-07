import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
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
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-2'>
                            <h1>
                                <Link className='text-white'>Stella</Link>
                            </h1>
                        </div>
                        <div className='col-5'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search Products Here" aria-label="Search Products Here" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">
                                    <BsSearch />
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>

                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;