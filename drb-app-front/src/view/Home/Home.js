import UILobbyManager from '../../components/UILobbyManager/UILobbyManager';

import DRB_LOGO from '../../img/drb-icon-temp.svg';

import './Home.scss';

export default function Home() {
    return (
        <section className='Home-container'>
            <img className='Home-logo' src={DRB_LOGO} alt={DRB_LOGO} />
            <h1 className='Home-title'>Draw, Redraw & Bullshitterry</h1>
            <article className='Home_to_lobby-wrapper'>
                <UILobbyManager />
            </article>
        </section>
    );
}