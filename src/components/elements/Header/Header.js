/*
This will be a STATELESS component
*/
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        //React.createElement('div', {className: 'react_div'}, 'This is a test'); // Not JSX
        //Below is a JSX way much easier and closer to HTML
        //These classes are already defined and given to us in Header.css by teacher
        <div className = "rmdb-header"> 
            <div className="rmdb-header-content">
                <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="rmdb-logo" />
                <img className="rmdb-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;