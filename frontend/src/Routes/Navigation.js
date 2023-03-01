import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Login from '../components/Login';
import SurveyNew from '../components/surveys/SurveyNew';
import PrivateRoutes from './ProtectedRoutes';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/survey/new' element={<SurveyNew />} />
          <Route path='/surveys' element={<Dashboard />} />
          {/* <Route path='/' element={<la />}></Route> */}
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Route>
          <Route path='/' element={<Landing />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
