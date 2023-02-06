import { Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Landing from '../components/Landing';

const Navigation = () => {
  return (
    <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path='/' element={<App />}>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Route>
    </Routes>
  );
};

export default Navigation