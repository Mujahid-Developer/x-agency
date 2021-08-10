import React from 'react';
import '../Details/Details.css';
import aboutImage from '../../assets/about-image.svg';

const Details = () => {
    return (
        <div>
            <div className="about-section">
                <div className="about-image">
                    <img src={aboutImage} alt="" />
                </div>
                <div className="about-text">
                    <h2>Why You Choose Us?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius libero consectetur veniam alias fugit adipisci esse recusandae architecto cum. Tempore doloribus odit iure quod vero tempora eum possimus totam.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eius libero consectetur veniam alias fugit adipisci esse recusandae architecto cum. Tempore doloribus odit iure quod vero tempora eum possimus totam.</p>
                </div>
            </div>
        </div>
    );
};

export default Details;