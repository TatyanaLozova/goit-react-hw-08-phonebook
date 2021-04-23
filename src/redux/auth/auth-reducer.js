// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import autActions from './auth-actions'


// const initialUserState = { name: null, email: null };


// const user = createReducer(initialUserState, {
//     [autActions.registerSuccess]: (_, {payload}) => payload.user,
//     [autActions.loginSuccess]: (_, {payload}) => payload.user,
//     [autActions.logoutSuccess]: () => initialUserState,
//     [autActions.getCurrentUserSuccess]: (_, {payload}) => payload.user,
    
// });

// const token = createReducer(null, {
//     [autActions.registerSuccess]: (_, { payload }) => payload.token,
//     [autActions.loginSuccess]: (_, { payload }) => payload.token,
//     [autActions.loginSuccess]: () => null,
// });

// // const error = createReducer(null, {
// //     [autActions.registerError]: (_, {payload}) => payload.error,
// // });
//  const isAuthenticated = createReducer(false, {
//   [autActions.registerSuccess]: () => true,
//   [autActions.loginSuccess]: () => true,
//   [autActions.getCurrentUserSuccess]: () => true,
//   [autActions.registerError]: () => false,
//   [autActions.loginError]: () => false,
//   [autActions.getCurrentUserError]: () => false,
//   [autActions.logoutSuccess]: () => false,
// });
// export default combineReducers({
//     user,
//     token,
//     isAuthenticated,
// });