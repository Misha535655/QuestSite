import {React, useState} from 'react';
import "../styles/graphik.css";


function Graphik({quests}) {
  const [visible, setVisible] = useState(false);
 const renderItem =  (name, time) => {
  setVisible(!visible)
  document.getElementById('graphik').innerHTML = `<h3>Запис на квест : "${name}"</h3>
  <p>Бронювання на ${time} ціна за одну особу 250грн</p>
  <form action="" class='formApointment'>
          <label htmlFor="">Ім'я</label>
          <input type="text" />
          <label htmlFor="">E-mail</label>
          <input type="text" />
          <label htmlFor="">Номер телефона</label>
          <input type="text" />
          <button class='send' type='submite'>Забронювати</button>
        </form>
        `;
        setVisible(!visible)
  }
  const clearItem = () => document.getElementById('graphik').innerHTML = ''
  return (
    <div className='graphikBox'>

      <div className='ModalReg' id='graphik'>
      
      </div>  
      <h1>Забронювати гру</h1>
        <ul className='graphikList'>
           {quests.map((item) => 
            <li>
                <ul className='graphikTime'>
                    <li><a href="">{item.name}</a></li>
                    {item.time.map(time => <li onClick={() => renderItem(item.name, time)} >{time}</li> )}
                </ul>
            </li>
           )}
        </ul>
    </div>
  )
}

export default Graphik