import React from 'react';

import FIrsstHomePageBanner from '../../Components/FirstHomePageBanner/FIrsstHomePageBanner';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <FIrsstHomePageBanner></FIrsstHomePageBanner>
            <h1 className='home-page-heading-style mx-auto'>TCS Controls Most Trusted CCTV, Barrier Gate & Door Access System Supplier & Contractor</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 w-75 mx-auto my-5">
                <div className="col ">
                    <div className="card shadow-lg  review-style">
                        <img src="image/img/reviews/review1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Provide highly innovative and user friendly technology in security system."</h5>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card shadow-lg review-style">
                        <img src="image/img/reviews/review2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Very responsive, easy to deal with, and professional."</h5>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card shadow-lg review-style">
                        <img src="image/img/reviews/review3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Fast response in email and professional in communication."</h5>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card shadow-lg review-style ">
                        <img src="image/img/reviews/review4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">"Professionally provide services for future tech advancement that provide convenience to other businesses"</h5>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='home-page-heading-style mx-auto my-5'>We work with some of the most successful companies</h2>

            <div id="carouselExampleFade" className="carousel slide carousel-fade  p-3 ">
                <div className="carousel-inner w-50 mx-auto referances-style shadow-lg">
                    <div className="carousel-item active">
                        <img src="image/img/references/referances1.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img/references/referances2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img/references/referances3.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img/references/referances4.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img/references/referances5.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/img/references/referances6.png" className="d-block w-100" alt="..." />
                    </div>


                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon arrow-style p-4 " aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon arrow-style p-4 " aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    );
};

export default Home;