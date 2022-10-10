import React from 'react';

import './Message.scss';

export default function Message(props) {
    return(
        <article className='Message-wrapper'>
            <p className='Message-content'>{props.user} : {props.message}</p>
        </article>
    )
};