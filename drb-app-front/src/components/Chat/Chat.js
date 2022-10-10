import React, { useState, useEffect, useRef } from 'react';
import SignalRConnection from '../../services/signalRConnection';

import ChatWindow from './../ChatWindow/ChatWindow';
import ChatInput from './../ChatInput/ChatInput';

import './Chat.scss';

const Chat = () => {
    const [ connection, setConnection ] = useState(null);
    const [ chat, setChat ] = useState([]);
    const latestChat = useRef(null);

    latestChat.current = chat;

    useEffect(() => {
        const newConnection = SignalRConnection.getInstance();
        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            console.log('Connected!');
            
            connection.on('ReceiveMessage', (user, message) => {
                const chatMessage = {
                    user: user,
                    message: message
                };
                const updatedChat = [...latestChat.current];
                updatedChat.push(chatMessage);
            
                setChat(updatedChat);
            });
        }
    }, [connection]);

    const sendMessage = async (user, message) => {

        if (connection._connectionStarted) {
            try {
                await connection.send('SendMessage', message);
            }
            catch(e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }

    return (
        <section className='Chat-wrapper'>
            <ChatWindow chat={chat}/>
            <hr />
            <ChatInput sendMessage={sendMessage} />
        </section>
    );
};

export default Chat;