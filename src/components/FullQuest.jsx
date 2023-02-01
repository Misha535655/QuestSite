import React from 'react'
import Quest from './Quest'
import "../styles/quest.css"

function FullQuest({quests}) {
    console.log(quests)
  return (
    <ul className='questList'>
        {quests.map((item) => 
            <Quest
            people = {item.people} 
            location = {item.location}
            background = {item.image}
            />
        )}
    </ul>
    
  )
}

export default FullQuest