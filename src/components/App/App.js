import React, {Component} from 'react';
import Header from '../Header/Header'
import Menu from '../Menu/Menu'

// The main app
class App extends Component {
  
  // Renders all the shit
  render(){
    return (
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}

export default App;
