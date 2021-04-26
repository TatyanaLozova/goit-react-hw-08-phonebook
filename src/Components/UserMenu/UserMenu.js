import React from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from "../../redux/auth";
import ava from '../../images/ava.jpg'

const styles = {
avatar: {
      borderRadius: "50%",
}
}

const UserMenu = ({ avatar, name, onLogout }) => (
    <div>
        <img src={avatar} alt="" width="40" styles={styles.avatar}
         />
        <span>Welcome, {name}</span>
        <button type="button" onClick={onLogout}>Logout</button>
    </div>

);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  avatar: ava,
});
const mapDispatchToProps = {
 onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps) (UserMenu);
