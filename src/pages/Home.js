import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/main-banner-1.jpg'
import banner2 from '../images/catbanner-01.jpg'
import banner3 from '../images/catbanner-02.jpg'
import banner4 from '../images/catbanner-03.jpg'
import banner5 from '../images/catbanner-04.jpg'

const Home = () => {
    return (
        <>
            <section className='home-wraper-1 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img src={banner1} className='img-fluid rounded-3' alt="main-banner" />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS</h4>
                                    <h5>i Phone 14 Pro</h5>
                                    <p>From $999.00 or $41.62/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='d-flex gap-10 flex-wrap justify-content-between align-items-center'>
                                <div className="small-banner position-relative">
                                    <img src={banner2} className='img-fluid rounded-3' alt="main-banner" />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>BEST SALE</h4>
                                        <h5>Laptop Max</h5>
                                        <p>From $1600 or <br /> $150.62/mo</p>

                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={banner3} className='img-fluid rounded-3' alt="main-banner" />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>15% OFF</h4>
                                        <h5>Smart Wacth 7</h5>
                                        <p>From $599 or <br /> $50.62/mo</p>

                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={banner4} className='img-fluid rounded-3' alt="main-banner" />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>Shop the lates band <br /> Styles and colors</p>

                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img src={banner5} className='img-fluid rounded-3' alt="main-banner" />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>FREE ENGRAVING</h4>
                                        <h5>AirPod Max</h5>
                                        <p>Hign-fidefity playnack &<br /> ultra-low distortion</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;