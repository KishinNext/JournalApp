import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { Sidebar } from './Sidebar'
import { useSelector } from 'react-redux'
import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)

    return (
        <div className='journal__main-content'>
            <Sidebar></Sidebar>
            <main>
                {
                    active
                        ? (<NoteScreen></NoteScreen>)
                        : (<NothingSelected></NothingSelected>)
                }
                {/* <NothingSelected></NothingSelected> */}
                
            </main>
        </div>
    )
}
