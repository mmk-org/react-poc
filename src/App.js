import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyContent from './components/MyContent';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import MyNavBar from './components/MyNavBar';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        {/* left side navbar */}
        <MyNavBar />

        {/* right content panel with header and footer */}
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
