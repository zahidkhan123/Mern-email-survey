import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../store/store';
import Navigation from '../Routes/Navigation';
import { login } from '../store/actions';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
  }, []);

  return (
    
      <div className='container'>
        <Navigation />
      </div>
  
  );
};

export default App;
