import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/main-banner-1.jpg'

const Home = () => {
    return (
        <>
            <section className='home-wraper-1 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img src={banner1} className='img-fluid rounded-3' alt="main-banner" />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h5>i Phone 14 Pro</h5>
                                    <p>From $999.00 or $41.62/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;