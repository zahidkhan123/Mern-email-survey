import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/actions';
import Payments from './Payments';
const Header = () => {
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state?.userLogin?.user);
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link
          to={isUser?.google_id || isUser != false ? '/surveys' : '/'}
          className='brand-logo'
        >
          Emaily
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isUser?.google_id || isUser != false ? (
            <div>
              <li>
                <Payments />
              </li>
              <li style={{margin:'0 10px'}}>
                credits {isUser?.credits}
              </li>
              <li>
                <a href='api/v1/auth/logout'>Logout</a>
              </li>
            </div>
          ) : (
            <li>
              <a href='api/v1/auth/google' className='btn-flat'>
                Login with Google
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
