import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/actions';
import Landing from './Landing';

const App = () => {


const dispatch = useDispatch();
  useEffect(() => {
    dispatch(login());
  }, [])
  
   return (
    <div>
      <h1>Homepage</h1>
      <Link to="landing">Landing</Link>
      <Link to="surveys">Dashboard</Link>
      <Link to="surveynew">New Survey</Link>
    </div>
  );
};

export default App;
