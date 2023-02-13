// import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css';
// import Landing from './components/Landing';
import Navigation from './Routes/Navigation';
import Header from './components/Header';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
