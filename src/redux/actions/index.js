import { BUY_LAPTOP, BUY_MOBILE, BUY_TV, FETCH_USERS_FAIL, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./actionTypes"
import axios from "axios"

export const buyLaptop = () =>{
    return{
        type:BUY_LAPTOP
    }
}

export const buyMobile = () =>{
    return{
        type:BUY_MOBILE
    }
}

export const buyTV = () =>{
    return{
        type:BUY_TV
    }
}

export const fetchUsersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) =>{
    return{
        type:FETCH_USERS_SUCCESS,
        data:users
    }
}
export const fetchUsersFail = (error) =>{
    return{
        type:FETCH_USERS_FAIL,
        data:error
    }
}

export const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            let users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFail(error))
        })
    }
}
