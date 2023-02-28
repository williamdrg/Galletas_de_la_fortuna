import React from 'react';


const Button = ({ change, pp }) => {
        
    return (
        <div>
            <button className={pp} onClick={ change }>Ver otro</button>
        </div>
    );
};

export default Button;