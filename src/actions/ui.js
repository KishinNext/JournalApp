import { types } from "../types/types";

export const setError = (err) =>({
    type: types.iuSetError,
    payload: err
})

export const removeError = () =>({
    type: types.uiRemoveError,

})

export const startLoading = () =>({
    type: types.uiStartLoading,
    payload: true
})

export const finishLoading = () =>({
    type: types.uiFinishLoading,
    payload: false
})