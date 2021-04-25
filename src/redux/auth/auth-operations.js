import axios from 'axios'
import {
    registerRequest,
    // registerSuccess,
    // registerError,
    // loginRequest,
    // loginSuccess,
    // loginError,
    // logoutSuccess,
    // logoutError,
    // getCurrentUserRequest,
    // getCurrentUserSuccess,
    // getCurrentUserError,

} from '../auth'

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
      
};

const register = credentials => async dispatch => {
    dispatch(registerRequest());
    try {
        const response = await axios.post('/users/signup', credentials);
        token.set(response.data.token);
        
    } catch (error) {
        
    }
}



export default {
    register,
    logout,
    login,
    getCurrentUser,
};


