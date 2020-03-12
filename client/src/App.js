import React, { useEffect, Fragment } from 'react';
//import classes from './App.module.css';
import AboutUs from './components/AboutUs/AboutUs';
import MainBuild from './containers/MainBuild/MainBuild';
import PricePlans from './components/PricePlans/PricePlans';
import OurServices from './components/OurServices/OurServices';
import RegisterCont from './containers/Register/Register';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Routing/PrivateRoute';
import OurTeam from './components/OurTeam/OurTeam';
// redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './action/auth';
import setAuthToken from './utils/sethAuthToken';
import Layout from './components/Layout/Layout';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterForm from './components/RegisterForm/RegisterForm';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ()=> {
  
  useEffect( () => {
           store.dispatch(loadUser())
  }, []);

    return (
    
<Provider store={store}>
  <Fragment>
          <Layout />
          <section className="container">
          
                <Switch>
                  <Route exact path='/' component={MainBuild}></Route>
                  <Route exact path='/services' component={OurServices}></Route>
                  <Route exact path='/register'  component={RegisterCont} ></Route>
                  <Route exact path='/priceplans'  component={PricePlans} ></Route>
                  <Route exact path='/about' component={AboutUs} ></Route>
                  <Route exact path='/team'  component={OurTeam}></Route>
                  <Route exact path='/login'  component={LoginPage}></Route>
                  <Route exact path='/register'  component={RegisterForm}></Route>
                  <PrivateRoute exact path='/dashboard'  component={Dashboard}></PrivateRoute>
               </Switch>
          </section>   

   </Fragment>
 </Provider>
         
         

  );
  
}

export default App;
