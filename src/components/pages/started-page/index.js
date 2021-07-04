import React from 'react';
import './started-page.css'
const StartedPage = ()  => (
  <div className='started'>
    <div className="started-block">

      <h1>Сделаны 2, 3, 4 задания</h1>

      <h3>Второе задание</h3>
      <p>Данные с RESTApi записываются в store (redux).  При переходе на другое "задание" стор очищается</p>

      <h3>Третье задание</h3>
      <p>Данные с WebSocket записываются в store (redux).  При переходе на другое "задание" стор очищается</p>

      <h3>Четвертое задание</h3>
      <p>Сверстал страницу Carguru-main. Добился pixel perfect</p>

    </div>
  </div>
)
export default StartedPage