import React from 'react';
import FirstSlide from '../FirstSlide/FirstSlide';
import SecondSlide from '../SecondSlide/SecondSlide';
import ThirdSlide from '../ThirdSlide/ThirdSlide';
import './SummarySlides.css'

const SummarySlides = () => {
    return (
        <div className="summary">
            <div id="carouselExampleIndicators" className="carousel slide w-100 mx-auto" data-bs-ride="carousel">
                <div className="carousel-indicators button-color">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active  indicator-style" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="active  indicator-style" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="active  indicator-style" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <FirstSlide></FirstSlide>
                    </div>
                    <div className="carousel-item">
                        <SecondSlide></SecondSlide>
                    </div>
                    <div className="carousel-item">
                        <ThirdSlide></ThirdSlide>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default SummarySlides;