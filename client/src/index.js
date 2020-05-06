import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import './index.module.css';
import '../src/index.scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ConfigProvider } from 'react-avatar';
import ScrollToTop from './Scroll/Scroll';



const app = (
    
    <BrowserRouter>
    
      <ConfigProvider>
         <ScrollToTop>
           
            <App/>
            
         </ScrollToTop>
      </ConfigProvider>
   
    </BrowserRouter>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
