import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { connect } from 'react-redux'

const style = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 900,
    color: "#ffffff",
  },
  activeLink: {
      color: "red",
  },
};


const Navigation = ({ isAuthenticated }) => {
    return (
        <nav>
            <NavLink
                to={routes.home}
                exact
                 style={style.link}
                activeStyle={style.activeLink}
            >
                HOME
                </NavLink>
            {isAuthenticated && (
                <NavLink
                    to={routes.contacts}
                    exact
                     style={style.link}
                activeStyle={style.activeLink}
                >
                    Phonebook
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
