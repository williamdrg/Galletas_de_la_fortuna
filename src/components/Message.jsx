import React, { useState } from 'react';

const Message = ({dataPharase, dataAuthor}) => {

    return (
        <div className='container__paper'>
        <div className='paper'>
            <p>{dataPharase}</p>
        </div>
            <p>{dataAuthor}</p>
        </div>
        
    );
};

export default Message;