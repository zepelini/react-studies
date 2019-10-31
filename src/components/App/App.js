import React, {Component} from 'react';
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import LoginForm from '../LoginForm/LoginForm'

// The main app
class App extends Component {
  
  // Renders all the shit
  render(){
    return (
      <div>
        <Header />
        <Menu />
        <article className='container container--full grid'>
          <LoginForm />
        </article>
      </div>
    );
  }
}

export default App;
