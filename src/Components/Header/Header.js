import React from 'react';
import Hero from './Hero/Hero';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
        </div>
    );
};

export default Header;