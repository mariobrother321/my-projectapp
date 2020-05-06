import React, { useEffect, Fragment } from 'react';
//import classes from './App.module.css';
import AboutUs from './components/AboutUs/AboutUs';
import MainBuild from './containers/MainBuild/MainBuild';
//import PricePlans from './components/PricePlans/PricePlans';
import ProductList from './components/PricePlans/Products/Product.List';
import OurServices from './components/OurServices/OurServices';
import RegisterCont from './containers/Register/Register';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Routing/PrivateRoute';
import OurTeam from './components/OurTeam/OurTeam';
import Layout from './components/Layout/Layout';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
//import Alert from './components/Layout/Alert';
import CreateProfile from './components/Profile-Forms/CreateProfile';
import EditProfile from './components/Profile-Forms/EditProfile';
import AddExperience from './components/Profile-Forms/AddExperience/AddExperience';
import AddEducation from './components/Profile-Forms/AddEducation/AddEducation';
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post/Post';
import FileUpload from './components/uploader/FileUpload';
import ContactMsg from './components/Contact/ContactMsg/ContactMsg';
import ContactMsgError from './components/Contact/ContactMsgError/ContactMsgError';
import Cart from './components/Cart/Cart'

// redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './action/auth';
import setAuthToken from './utils/sethAuthToken';
 

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
         
          
                <Switch>
                  
                  <Route exact path='/' component={MainBuild}></Route>
                  <Route exact path='/services' component={OurServices}></Route>
                  <Route exact path='/register'  component={RegisterCont} ></Route>
                  <Route exact path='/priceplans'  component={ProductList} ></Route>
                  <Route exact path='/about' component={AboutUs} ></Route>
                  <Route exact path='/team'  component={OurTeam}></Route>
                  <Route exact path='/login'  component={LoginPage}></Route>
                  <Route exact path='/register'  component={RegisterForm}></Route>
                  <Route exact path='/support'  component={Support}></Route>
                  <Route exact path='/testimonials'  component={Testimonials}></Route>
                  <Route exact path='/contact'  component={Contact}></Route>
                  <Route exact path='/profiles'  component={Profiles}></Route>
                  <Route exact path='/profile/:id'  component={Profile}></Route>
                  <Route exact path='/send/success'  component={ContactMsg}></Route>
                  <Route exact path='/send/error'  component={ContactMsgError}></Route>
                  <PrivateRoute exact path='/dashboard'  component={Dashboard}></PrivateRoute>
                  <PrivateRoute exact path='/cart'  component={Cart}></PrivateRoute>
                  <PrivateRoute exact path='/create-profile'  component={CreateProfile}></PrivateRoute>
                  <PrivateRoute exact path='/edit-profile'  component={EditProfile}></PrivateRoute>
                  <PrivateRoute exact path='/add-experience'  component={AddExperience}></PrivateRoute>
                  <PrivateRoute exact path='/add-education'  component={AddEducation}></PrivateRoute>
                  <PrivateRoute exact path='/posts'  component={Posts}></PrivateRoute>
                  <PrivateRoute exact path='/posts/:id'  component={Post}></PrivateRoute>
                  <PrivateRoute exact path='/uploader'  component={FileUpload}></PrivateRoute>
               
    

               </Switch>
           
               <Footer />
   </Fragment>
 </Provider>
         
         

  );
  
}

export default App;
