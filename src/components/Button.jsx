import React from 'react';

const Button = ({ change }) => {
    
    return (
        <div>
            <button className='btn__change' onClick={ change }>Ver otro</button>
        </div>
    );
};

export default Button;