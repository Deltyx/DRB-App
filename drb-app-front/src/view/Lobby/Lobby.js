

export default function Lobby() {
    return (
        <div className="container">
            <section className='player_list'>
                <div className='player_info'></div>
                <div className='player_info alt'></div>
                <div className='player_info'></div>
                <div className='player_info alt'></div>
                <div className='player_info'></div>
            </section>
            <canvas id="Drawing_Zone" className='canvas_zone' width={900} height={600}></canvas>
            <section className='chat_zone'>
                <div className='chat_content'>Deltyx : blablabalbalblablablalbablabla</div>
            </section>
      </div>
    )
}