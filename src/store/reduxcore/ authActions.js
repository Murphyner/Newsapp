import axios from "axios";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actionTypes';

export const login = (login, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
        const response = await axios.post('https://oxuaz.yetim.me/login', {
            login,
            password
        })  
        
        
        const { data } = response
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data, 
        });
        localStorage.setItem('token' , data.token)
        
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response ? error.response.data : { error: 'Login Failed' }
        })
    }
}