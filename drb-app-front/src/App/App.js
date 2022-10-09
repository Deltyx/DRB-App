import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './../view/Home/Home.js';
import Lobby from '../view/Lobby/Lobby.js';

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby/:lobbyId" element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
