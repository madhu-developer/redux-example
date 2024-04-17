import { BUY_TV } from "../actions/actionTypes";

const initialState = {
    noOfTV:1000
}

const tvReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_TV:
            return {noOfTV: state.noOfTV-1}
        default:
            return state;
    }
}

export default tvReducer