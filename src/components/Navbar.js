import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                    <Link className="navbar-brand text-white text-lg brand-text" to="/">
                         SKD MovieSeriesInfo
                         </Link>
                         <a href="https://www.t.me/senyokd8" target="_blank" title="Senyo's Telegram"><i className="fa fa-telegram fa-3x" id="react-logo"  /></a>
                        
                       
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                        <i className="fa fa-imdb fa-5x" id="imdb-logo" />
                        </li>
                    </ul>
                </div>
             </nav>
        </div>
    )
}
