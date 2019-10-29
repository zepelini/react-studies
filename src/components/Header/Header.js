import React, {Component} from 'react';
import BurguerButton from '../BurguerButton/BurguerButton'

// The header component
class Header extends Component {
  render(){
    return (
      <header className='header background-secondary flex flex-align-center flex-justify-between'>
          <a href='/' className='logo text-uppercase text-none text-left'>
            <span className='font-30 color-primary'>SOME</span>
            <span className='font-17 color-primary'>COMPANY</span>
          </a>
          <BurguerButton />
      </header>
    );
  }
}

export default Header;
