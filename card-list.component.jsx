import React from 'react'

import './card-list.style.css'

export const CardList = props  => (
    <div className='card-list'>
    {
        this.state.Monsters.map(monster => 
        (<h1 key={monster.id}>{monster.name}</h1>
        ))}

    </div>
)