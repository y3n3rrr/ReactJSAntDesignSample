
import axios from 'axios'

export const createUser = ({kullaniciadi, gorevi}) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/posts', {kullaniciadi, gorevi})
        
        dispatch({type:'CREATE_USER', payload:response.data})
    }
}

export const getUsers = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/posts')
        dispatch({type:'GET_USERS', payload:response.data})
    }
}