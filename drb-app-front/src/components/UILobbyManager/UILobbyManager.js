import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './UILobbyManager.scss';

export default function UILobbyManager(props) {
    const [id, setID] = useState("");

    const navigate = useNavigate();
    
    const handleJoin = (evt) => {
        evt.preventDefault();
        if(!id) {
            alert("Prout")
        } else {
            let idRoute = "/lobby/" + id
            navigate(idRoute)
        }
    }
    const handleCreate = (evt) => {
        // TO DO LA CREATION ICI
        evt.preventDefault();
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
                    <button className='CreateLobby-btn' type="submit" onClick={handleCreate}>CREER</button>
                    <button className='JoinLobby-btn' type="submit" onClick={handleJoin}>REJOINDRE</button>
                </div>
            </form>
        </section>
    );
  }