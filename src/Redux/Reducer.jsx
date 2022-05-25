const initialState = {
    product:[]
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