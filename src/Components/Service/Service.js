import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, _id, image, price, description } = service;

    return (
        <div>
            <div className="col card-style service-style shadow-lg m-5 p-3 rounded-3 ">
                <div className="card h-100  ">
                    <div className="img-style">
                        <img src={image} className="card-img-top  " alt="..." />
                    </div>
                    <div className="card-body-style detail-style text-center">
                        <div className="card-body text-center">
                            <h4 className="card-title">{name}</h4>
                            <h5 className="card-text">Price: {price}</h5>
                            <p className="card-text">{description}</p>

                        </div>

                        <Link to={`/placeOrders/${_id}`}>
                            <button className="btn btn-style btn-warning   m-5 p-2 mx-auto">Booking: {name.toLowerCase()}</button>


                        </Link>


                    </div>

                </div>
            </div>

        </div>
    );

};

export default Service;