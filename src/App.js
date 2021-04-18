import React from "react";
// import ContactForm from './Components/ContactForm/ContactForm'
// import ContactList from './Components/ContactList/ContactList';
// import Filter from './Components/Filter/Filter'
import { Route, Switch } from 'react-router-dom'


import './App.css';
import AppBar from "./Components/AppBar/AppBar";
import HomeView from "./views/HomeView";
import RegistrationView from "./views/RegistrationView";
import LoginView from "./views/LoginView";
import ContactsView from "./views/ContactsView";


// const HomeView = lazy(() =>
//   import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
// );
// const ContactsView = lazy(() =>
//   import("./views/ContactsView.js" /* webpackChunkName: "contacts-view" */)
// );
// const LoginView = lazy(() =>
//   import("./views/LoginView.js" /* webpackChunkName: "login-view" */)
// );
// const RegistrationView = lazy(() =>
//   import(
//     "./views/RegistrationView.js" /* webpackChunkName: "registration-view" */
//   )
// );


const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
           <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegistrationView} />
        <Route path="/login" component={LoginView} />

      {/* <h1> Phonebook task #7</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
        <ContactList /> */}
        </Switch>
    </div>
  );
};
  

export default App;




