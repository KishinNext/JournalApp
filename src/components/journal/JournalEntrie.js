import React from 'react'
import moment from 'moment'

export const JournalEntrie = ({id, date, title, body, url}) => {
    const noteDate = moment(date)
    console.log(noteDate)
    return (
        <div className='journal__entry pointer'>
            
            {
                url&&
                <div className="journal__entry-picture"
                style={{
                    backgroundImage:`url(${url})`,
                    backgroundSize:'cover'
 
                }}
                >
                </div>
            }
            <div className='journal__entry-content'>

                <div className='journal__entry-body'>
                    <p className='journla__entry-title'>{title}</p>
                    <span className='journal__entry-text'> {body}</span>
                </div>
                <div className='journal__entry-date-box'>
                    <span>{noteDate.format('dddd')}</span>
                    <h4>{noteDate.format('Do')}</h4>
                </div>
            </div>
        </div>
    )
}
