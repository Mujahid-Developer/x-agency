import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import '../Nav/Nav.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <a href="#" className="logo">X-Agency</a>
                    <ul className="nav-item">
                        <li><a href="">Services</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
            </nav>
        </div>
    );
};

export default Nav;