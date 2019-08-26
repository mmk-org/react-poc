import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MyContent from './MyContent';

class MyNavBar extends React.Component {

    render() {
        return(
            <BrowserRouter>
                <nav id="my-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                <Route path="/home"  render={(routeProps) => (
                            <MyContent {...routeProps} name='home'/>
                            )}>
                </Route>
                <Route path="/about"  render={(routeProps) => (
                            <MyContent {...routeProps} name="about"/>
                            )}>
                </Route>
                <Route path="/skills"  render={(routeProps) => (
                            <MyContent {...routeProps} name="skills"/>
                            )}>
                </Route>
                </Switch>

            </BrowserRouter>
        );
    }
}

export default MyNavBar;