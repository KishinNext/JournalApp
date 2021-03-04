import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar></NotesAppBar>
            <div className='notes__contenet'>
                <input type='text'
                    placeholder='Some Awesome tittle'
                    className='notes__title-input'
                ></input>
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                ></textarea>
                <div >
                    <img  className='notes__img' src='https://www.islabit.com/wp-content/uploads/2020/03/generadores-de-sitios-web-aleatorios-3-1024x512.jpg' alt='imagen aleatoria'></img>
                </div>
            </div>
        </div>
    )
}
