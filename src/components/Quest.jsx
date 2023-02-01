import React from 'react'


function Quest({people, location, background}) {
  return (
    <li className='quest'>
        <ul className='description'>
          <li>
          <a href="">Детальніше</a>
          </li>
         <li>
          {people} People
         </li>
         <li> 
          {location} 
         </li>
        </ul>
        <img src={background} alt="" />
    </li>
  )
}

export default Quest