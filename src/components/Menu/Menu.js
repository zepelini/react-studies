import React, {Component} from 'react';

// The header component
class Menu extends Component {
  render(){
    return (
      <nav className='menu background-secondary'>
          <div className='close-button'>

          </div>
          <ul className='flex flex-align-end flex-column'>
            <li>
                <a href='/' className='font-30 color-white text-none'>Dashboard</a>
            </li>
            <li>
                <a href='/' className='font-30 color-white text-none'>Funções</a>
            </li>
            <li>
                <a href='/' className='font-30 color-white text-none'>Usuários</a>
            </li>
            <li className='end-element'>
                <a href='/' className='font-30 color-primary text-none'>Logout</a>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Menu;
