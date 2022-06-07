
import { USER_LOGIN } from "./Action";
const initialState = {
    product:[],
    token:""
}
export const reducer = (state=initialState,{type,payload})=>{

    switch(type){
        case "SET_PRODUCT":
            return{
                ...state,
                product:payload
            }
            default:return state
    }
}



export const LogInReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return {
                ...store,
                token: payload,
                
            }
        default:
            return store;
    }

}