import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
