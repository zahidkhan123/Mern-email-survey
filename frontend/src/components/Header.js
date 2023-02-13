import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/actions';
const Header = () => {
 debugger
  const dispatch = useDispatch();    
  const isUser = useSelector((state) => state?.userLogin?.user);
  debugger
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={isUser?.google_id || isUser != false ? "/surveys" : "/"} className='brand-logo'>
          Emaily
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isUser?.google_id || isUser != false ? (
            <li>
            <a href='api/v1/auth/logout'>Logout</a>
            </li>
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
