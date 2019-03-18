import React from 'react';


const Table = ({id, fellow, from, message, skill, type, date}) => {
    return (
        <div className="feedback-row fb-item-row">
            <div className="fb-ind-item">{id}</div>
            <div className="fb-ind-item">{fellow}</div>
            <div className="fb-ind-item">{from}</div>
            <div className="fb-ind-item">{message}</div>
            <div className="fb-ind-item">{skill}</div>
            <div className="fb-ind-item">{type}</div>
            <div className="fb-ind-item">{date}</div>
        </div>
    )
}

export default Table; 