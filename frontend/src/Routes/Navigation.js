import { Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import Login from '../components/Login';
import SurveyNew from '../components/SurveyNew';
import PrivateRoutes from './ProtectedRoutes';

const Navigation = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path='/surveynew' element={<SurveyNew />} />
        <Route path='/surveys' element={<Dashboard />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/' element={<App />}></Route>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      </Route>
        <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Navigation;
