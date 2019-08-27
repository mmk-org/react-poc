import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyContent from './components/MyContent';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        {/* side navbar */}
        <nav id="my-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse">
            <ul>
              <li className="active"><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
            </ul>
          </div>
        </nav>

        {/* left content panel with header and footer */}
        <div className="wrapper">
          <MyHeader />
            <Route path="/" exact strict render={(routeProps) => (
                                <MyContent {...routeProps} name='home'/>
                                )}>
            </Route>
            <Route path="/home" render={(routeProps) => (
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
          <MyFooter />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
