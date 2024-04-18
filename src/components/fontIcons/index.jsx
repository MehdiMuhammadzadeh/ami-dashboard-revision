import './style.css';
import React from 'react';


export const Icons = ({id, name, size = 10, iconColor = '#fff'}) => {

    return (
        <div
            id={id}>
            <div style={{color: iconColor, fontSize: `${size}px`}} className={`icon icon-${name} `}/>
        </div>
    );
};

