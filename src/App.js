import React from 'react';
import MyNavBar from './components/MyNavBar';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';
import MyFooter from './components/MyFooter';

class App extends React.Component {

  render() {
    return (
      <div>
        <MyNavBar />
        <MyBody />
      </div>
    );
  }
}

export default App;
