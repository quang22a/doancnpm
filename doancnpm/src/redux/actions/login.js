import {actionType} from '../actionType';

const {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} = actionType;
export const login = (data) => {
    dispatch({type: LOGIN_SUCCESS});
}