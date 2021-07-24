import React from 'react';
import '../Hero/Hero.css';
import heroImage from '../../../assets/hero-image.svg';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="text-area">
                <h1>Build Your Business</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, officia minus atque tempora recusandae quidem animi facilis quasi omnis voluptatum quae. Nulla possimus deserunt unde tempore ad sunt voluptas enim.</p>
                <button>Get Qouta</button>
            </div>
            <div className="img-area">
                <img src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;