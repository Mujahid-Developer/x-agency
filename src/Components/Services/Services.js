import { faGlobe, faMobile, faPencilRuler, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../Services/Services.css';

const Services = () => {

    const services = [
        {
            name: 'Web Development',
            icon: faGlobe
        },
        {
            name: "App Development",
            icon: faMobile
        },
        {
            name: "UI/UX",
            icon: faPencilRuler
        },
        {
            name: "SEO",
            icon: faSearch
        },
    ]
    
    return (
        <div>
            <h1 className="section-title">Our Services</h1>
            <div className="items">
            {services.map(service => <Service props = {service}></Service>)}
            </div>

        </div>
    );
};

const Service = ({props}) => {
    return (
        <div className="service-items">
                <div>
                    <FontAwesomeIcon icon={props.icon} size ="4x" color="white"></FontAwesomeIcon>
                </div>
                <div className="service-text">
                    <h3>{props.name}</h3>
                </div>
        </div>
    );
};

export default Services