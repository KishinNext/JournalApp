import { bd } from "../firebase/firebase"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"


export const startNewNote = () =>{
    return async (dispatch, getSate)=>{
        const uid = getSate().auth.uid
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await bd.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(activeNote( doc.id, newNote )) 
    }
}

export const activeNote = ( id, note ) =>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
})
export const startLoadingNotes = ( uid ) =>{
    return async (dispatch) =>{
        const notes = await loadNotes(uid)
        dispatch( setNote(notes) )
    }
}
export const setNote = (notes)=>({
    type: types.notesLoad,
    payload: notes
})