import React, { useState } from 'react';

const Message = ({dataPharase, dataAuthor, animation}) => {

    

    return (
        <div className='container__paper'>
        <div className={animation} >
            <p>{dataPharase}</p>
        </div>
            <p>{dataAuthor}</p>
        </div>
        
    );
};

export default Message;