import React, { useState } from 'react';

const Message = ({dataPharase, dataAuthor}) => {

    return (
        <div className='container__paper'>
        <div className='paper'>
            <p>{dataPharase}</p>
            <p>{dataAuthor}</p>
        </div>
        </div>
        
    );
};

export default Message;