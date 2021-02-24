import { createStore, combineReducers } from 'redux';
import { login } from '../reducer/login';

const AppReduces = combineReducers({
  login,

});

const rootReducer = (state, action) => {
    return AppReduces(state, action);
};

const store = createStore(rootReducer);

export default store;