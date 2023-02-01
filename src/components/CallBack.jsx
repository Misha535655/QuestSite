import {React, useState} from 'react';
import '../styles/callBack.css'

function CallBack() {
  const [Visible, setVisible] = useState(false);
  const openClose = () => setVisible(!Visible)
  return (
    <div className='callBack'>
       <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="" onClick={openClose}/>
       {Visible && <form className='callBackForm'>
        <img src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png" alt="" onClick={openClose}/>
        <h1>Хотите, перезвоним Вам за 30 секунд?</h1>
        <div className="numberForm">
            <input type="tel" placeholder='0638716080' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <button className='send' type='submite'>Перезвоните</button>
        </div>
       </form>}
    </div>
  )
}

export default CallBack