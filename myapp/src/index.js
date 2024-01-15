import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './components/Redux-test/Store';
import Store2 from './components/AddToCart/Store2';
import {BrowserRouter} from "react-router-dom"

import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={Store2}> 
    <BrowserRouter> 
    
    
    <App />
    </BrowserRouter>
    </Provider>
    
    
  </React.StrictMode>
  
  
);

