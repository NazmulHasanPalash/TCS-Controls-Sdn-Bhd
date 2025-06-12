import React from 'react';
import './HomePageDescriptionCard.css';

const HomePageDescriptionCard = () => {
    return (
        <div>
            <div className='container w-100 mx-auto my-5 text-center'>
                <h1>Driving Business Success with <span></span>Expert Solutions</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mx-auto">Our Expertise</h5>
                                <p className="card-text">Our team of experts leverages extensive experience and industry knowledge to provide tailored solutions that meet the unique needs of each client. With a focus on innovation, quality, and customer satisfaction, OJH continues to expand its services and reach, making a positive impact in the business community.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mx-auto">Our Impact</h5>
                                <p className="card-text">To date, OJH boasts a dynamic team of over 1,100 employees and has served more than 20,000 clients. We have facilitated the training of more than 600,000 participants through more than 7,000 workshops, demonstrating our commitment to empowering businesses with knowledge and skills.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title mx-auto">Our BranD Promise</h5>
                                <p className="card-text">At OJH, we are dedicated to providing On Time, On Point and On Our Mind experience to empower your entrepreneurial success.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePageDescriptionCard;