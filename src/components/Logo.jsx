import React from 'react';

function Logo(props) {
    return (
        <a href={props.link} target="_blank">
        <img src={props.src} className={props.className ? `logo ${props.className}` : "logo"} alt={props.alt}/>
    </a>)
}
export default Logo;