import React from "react";
import ContactForm from './Components/ContactForm/ContactForm'
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter'


import './App.css';


const App = () => {
  return (
    <div className="App">
      <h1> Phonebook task #7</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
  

export default App;
