import React, {Component} from 'react';

// The header component
class Header extends Component {
  render(){
    return (
      <header className='header background-secondary flex flex-align-center flex-justify-center'>
          <a href='/' className='logo text-uppercase text-none text-center'>
            <span className='font-30 color-primary'>SOME</span>
            <span className='font-17 color-primary'>COMPANY</span>
          </a>
      </header>
    );
  }
}

export default Header;
