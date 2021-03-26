import React from 'react'
import { useSelector } from 'react-redux'
import { JournalEntrie } from './JournalEntrie'

export const JournalEntries = () => {
    
    const {notes} = useSelector(state => state.notes)
    
    return (
        <div className='journal__entries'>
            {
                notes.map( (value, index) =>(<JournalEntrie key={value.id} {...value}></JournalEntrie>))
            }
        </div>
    )
}
