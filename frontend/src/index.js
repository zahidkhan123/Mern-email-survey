// import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactDOM from 'react-dom/client';
// import Landing from './components/Landing';
import Navigation from './Routes/Navigation';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>  
    <Header />
      <Navigation />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}   
    </BrowserRouter>
  </Provider>
);
