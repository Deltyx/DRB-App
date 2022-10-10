import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignalRConnection from '../../services/signalRConnection';

import './UILobbyManager.scss';

export default function UILobbyManager(props) {
    const [id, setID] = useState("");

    const navigate = useNavigate();
    const [ connection, setConnection ] = useState(null);
    
    useEffect(() => {
        const newConnection = SignalRConnection.getInstance();
        setConnection(newConnection);
    }, []);

    const handleJoin = (evt) => {
        evt.preventDefault();
        if(!id) {
            alert("Prout")
        } else {
            connection.invoke("Join", id)
            .then(function (result) {
                let idRoute = "/lobby/" + result.id
                navigate(idRoute)
            })
        }
    }
    const handleCreate = (evt) => {
        evt.preventDefault();
        connection.invoke("Create")
        .then(function (result) {
            let idRoute = "/lobby/" + result.id;
            navigate(idRoute)
        });
    }



    return (
        <section className='LobbyManager-wrapper'>
            <form className='JoinLobby-form'>
                <input
                    className='JoinLobby-input'
                    type="text"
                    placeholder="Insérez l'ID du lobby"
                    value={id}
                    onChange={e => setID(e.target.value)}
                />
                <div className='LobbyManagerBtn-wrapper'>
                    <button className='CreateLobby-btn' type="button" onClick={handleCreate}>CREER</button>
                    <button className='JoinLobby-btn' type="button" onClick={handleJoin}>REJOINDRE</button>
                </div>
            </form>
        </section>
    );
  }