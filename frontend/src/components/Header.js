import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          Emaily
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='api/v1/auth/google'>Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
