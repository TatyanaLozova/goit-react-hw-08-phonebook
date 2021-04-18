import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
// import { connect } from 'react-redux'


const Navigation = ({ isAuthenticated }) => {
    return (
        <nav>
            <NavLink
                to={routes.home}
                exact
                style
                activeStyle
            >
                HOME
                </NavLink>
            {isAuthenticated && (
                <NavLink
                    to={routes.contacts}
                    exact
                    style
                    activeStyle
                >
                    Phonebook
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;
