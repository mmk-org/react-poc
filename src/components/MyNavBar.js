import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MyContent from './MyContent';

class MyNavBar extends React.Component {

    render() {
        return(
            <nav role="navigation">
                <img id="my-image" src="favicon.ico" alt="My Image" />
                <h1 className="my-info">Mangesh K </h1>
                <span className="my-position">Software Developer in India</span>
                <div>
                    <ul>
                        <li ><Link className="active" to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/skills">Skills</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MyNavBar;