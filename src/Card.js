import React from 'react'
import './assets/card.css'


function Card(props) {
  return (
    <div className='card'>
        <img src={props.getimage} alt='imageFile'/>
    </div>
  )
}

export default Card