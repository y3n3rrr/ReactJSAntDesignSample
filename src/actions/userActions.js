
import axios from 'axios'

export const createUser = (kullaniciadi, gorevi) => {
    return async (dispatch) => {
        const response = await axios.post('',{kullaniciadi, gorevi})
        
        dispatch({type:'CREATE_USER', payload:response.data})
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/posts')
        debugger
        dispatch({type:'GET_USERS', payload:response.data})
    }
}