import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/newsletter.png'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';


const Footer = () => {
    return (
        <>
            <footer className='py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data gap-30 d-flex align-items-center'>
                                <img src={img1} alt="newsLetter" />
                                <h2 className='mb-0 text-white'>Sign up For Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <input type="text" className="form-control py-1" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className='text-white mb-4'>Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>Uttora R/A, Agrabad, <br /> Chittagong, Bangladesh</address>
                                <a className='mt-3 d-block mb-0 text-white' href="tel:+880 4213464314">+880 1452364255</a>
                                <a className='mt-2 d-block mb-0 text-white' href="shads.tbh@gmail.com">shads.tbh@gmail.com</a>
                                <div className='socila-icons d-flex align-items-center gap-30 mt-4'>
                                    <a className='text-white' href="linkedin">
                                        <AiFillLinkedin className='fs-4' />
                                    </a>
                                    <a className='text-white' href="insta">
                                        <BsInstagram className='fs-4' />
                                    </a>
                                    <a className='text-white' href="git">
                                        <AiFillGithub className='fs-4' />
                                    </a>
                                    <a className='text-white' href="you">
                                        <AiFillYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link className='text-white py-2 mb-1'>Terms and Condition</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>

                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className='text-white mb-4'>Quick links</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptop</Link>
                                <Link className='text-white py-2 mb-1'>Headphone</Link>
                                <Link className='text-white py-2 mb-1'>Tablet</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}: Powered by Stella</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;