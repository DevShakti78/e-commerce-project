export const ProdData=(data)=>({
    type:"SET_PRODUCT",
    payload:data
})
export const USER_LOGIN = "USER_LOGIN";

export const userLogin = (payload) => ({ type: USER_LOGIN, payload })