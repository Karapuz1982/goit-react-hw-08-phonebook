import { combineReducers } from 'redux';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});