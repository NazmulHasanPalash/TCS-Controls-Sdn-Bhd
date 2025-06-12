import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    // const [services, setServices] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    return (
        <div id="serviceId">
            <h2 className=" mt-5 text-center">Our <span className="heading-style text-primary"> services</span> </h2>
            <div className="service-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mx-auto">

            </div>

        </div>
    );
};

export default Services;