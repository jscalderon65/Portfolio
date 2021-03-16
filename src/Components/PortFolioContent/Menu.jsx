import React from 'react'
import {Link} from 'react-router-dom';
const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li><h1><Link to="/home">Home</Link></h1></li>
                <li><h1><Link to="/about">About</Link></h1></li>
                <li><h1><Link to="/projects">Projects</Link></h1></li>
                <li><h1><Link to="/contact">Contact Form</Link></h1></li>
            </ul>
        </div>
    )
}

export default Menu
