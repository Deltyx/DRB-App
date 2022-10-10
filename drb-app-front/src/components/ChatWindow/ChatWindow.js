import React from 'react';

import Message from './../Message/Message';

import './ChatWindow.scss';

export default function ChatWindow(props) {
    const chat = props.chat
        .map(m => <Message 
            key={Date.now() * Math.random()}
            user={m.user}
            message={m.message}/>);

    return(
        <section className='ChatWindow-wrapper'>
            {chat}
        </section>
    )
};