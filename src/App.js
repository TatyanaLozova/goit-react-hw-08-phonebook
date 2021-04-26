import React, { lazy, Suspense } from "react";
import { Route, Switch } from 'react-router-dom'
import './App.css';
import AppBar from "./Components/AppBar/AppBar";
// import HomeView from "./views/HomeView";
// import RegistrationView from "./views/RegistrationView";
// import LoginView from "./views/LoginView";
// import ContactsView from "./views/ContactsView";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const HomeView = lazy(() =>
  import("./views/HomeView.js" /* webpackChunkName: "home-view" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView.js" /* webpackChunkName: "contacts-view" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView.js" /* webpackChunkName: "login-view" */)
);
const RegistrationView = lazy(() =>
  import(
    "./views/RegistrationView.js" /* webpackChunkName: "registration-view" */
  )
);


const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route exact path="/" component={HomeView} />
           <Route path="/contacts" component={ContactsView} />
        <Route path="/register" component={RegistrationView} />
        <Route path="/login" component={LoginView} />
        </Switch>
        </Suspense>
    </div>
  );
};
  

export default App;




