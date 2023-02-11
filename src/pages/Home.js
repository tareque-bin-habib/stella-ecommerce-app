import React from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../images/main-banner-1.jpg'
import banner2 from '../images/catbanner-01.jpg'
import banner3 from '../images/catbanner-02.jpg'
import banner4 from '../images/catbanner-03.jpg'
import banner5 from '../images/catbanner-04.jpg'
import service1 from '../images/service.png'
import service2 from '../images/service-02.png'
import service3 from '../images/service-03.png'
import service4 from '../images/service-04.png'
import service5 from '../images/service-05.png'
import cat1 from '../images/camera.jpg'
import cat2 from '../images/tv.jpg'
import cat3 from '../images/headphone.jpg'
import cat4 from '../images/acc.jpg'
import Marquee from "react-fast-marquee";
import brand1 from '../images/brand-01.png'
import brand2 from '../images/brand-02.png'
import brand3 from '../images/brand-02.png'
import brand4 from '../images/brand-04.png'
import brand5 from '../images/brand-05.png'
import brand6 from '../images/brand-06.png'
import brand7 from '../images/brand-07.png'
import brand8 from '../images/brand-08.png'

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
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
            <section className='home-wraper-2 py-5'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <div className='services d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={service1} alt="service" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={service2} alt="service" />
                                    <div>
                                        <h6>daily Service Offers</h6>
                                        <p className='mb-0'>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={service3} alt="service" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={service4} alt="service" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src={service5} alt="service" />
                                    <div>
                                        <h6>Source Payments</h6>
                                        <p className='mb-0'>100% protected payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wraper-2 py-5'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat1} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat2} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smart Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat3} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Ear Birds</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat4} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat1} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat2} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smart Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat3} alt="" />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Ear Birds</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src={cat4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className="marque-inner-wrapper bg-white card-wrapper">
                                <Marquee className='d-flex'>
                                    <div>
                                        <img src={brand1} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand2} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand3} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand4} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand5} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand6} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand7} alt="brand" />
                                    </div>
                                    <div>
                                        <img src={brand8} alt="brand" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;