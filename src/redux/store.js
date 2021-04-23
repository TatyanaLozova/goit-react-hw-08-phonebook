import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from "redux-logger";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-reducer";
// import  {autReducer} from "./auth";
// // удаляем persistStore

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions:
        [FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    //  auth:authReducer,
    contacts: contactsReducer,
   
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
// const persistor = persistStore(store);



export default  store;
