import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../routes'



const AuthNav = () => {
    return (
        <nav>
            <NavLink
                to={routes.registration}
                exact
                style
                activeStyle
            >
                REGISTRATION
                </NavLink>
            <NavLink
                to={routes.login}
                exact
                style
                activeStyle
            >
                LOGIN
            </NavLink>
            
        </nav>
    );
};

export default AuthNav;
