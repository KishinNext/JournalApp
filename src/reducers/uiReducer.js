import { types } from "../types/types";

const initialSatate = {
    loading : false,
    msgError : null
} 
export const uiReducer = (state= initialSatate, action) =>{
    switch (action.type) {
        case types.iuSetError:
            return {
                ...state, msgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state, msgError: null
            }
        case types.uiStartLoading:
            return {
                ...state, loading: action.payload
            }
        case types.uiFinishLoading:
            return{
                ...state, loading: action.payload
            }
            
        default:
            return state
    }
}