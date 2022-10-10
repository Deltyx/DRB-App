import React, { useState } from 'react';

import './ChatInput.scss';

export default function ChatInput(props) {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onInputMessageChange = (e) => {
        setMessage(e.target.value);
        setUser("CONSTANTIN");
    }

    return (
        <form className='ChatInput-form' onSubmit={onSubmit}>
            <button className='ChatInput-btn' type='submit'>{'>'}</button>
            <input
                className='ChatInput-input' 
                type="text"
                id="message"
                name="message"
                placeholder="Entrez votre réponse ici" 
                value={message}
                onChange={onInputMessageChange} />
        </form>
    )
};