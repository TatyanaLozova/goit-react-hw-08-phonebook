import React from 'react';
import { connect } from 'react-redux';
import {authOperations } from "../../redux/auth";


const UserMenu = ({ name, onLogout }) => (
    <div>
        <span>Welcome? {name}</span>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>

);

// const mapStateToProps = (state) => ({
//   name: authSelectors.getUserName(state),
//   avatar: myAvatar,
// });
const mapDispatchToProps = {
 onLogout: authOperations.logout,
};

export default connect(mapDispatchToProps) (UserMenu);
