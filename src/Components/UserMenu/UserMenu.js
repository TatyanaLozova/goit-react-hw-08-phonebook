import React from 'react';
// import { connect } from 'react-redux';
// import { authSelectors, authOperations } from "../../redux/auth";


const UserMenu = ({ name, onLogout }) => (
    <div>
        <span>Welcome? {name}</span>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>

)

export default UserMenu;
