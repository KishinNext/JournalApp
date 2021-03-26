import { bd } from "../firebase/firebase"



export const loadNotes = async ( uid ) =>{
    const notesSnap = await bd.collection(`${uid}/journal/notes`).get()
    const notes = []
    
    notesSnap.forEach(snapHijo =>{
        notes.push({
            
            id: snapHijo.id,
            ...snapHijo.data()
        }
        )
    })
    
    return notes
}