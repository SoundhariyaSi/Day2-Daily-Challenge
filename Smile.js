import React from 'react'
import Smiley from './Smiley.png'

function Smile() {
  return (
    <div>
        <h1>Smile Component</h1>
        <p>It is a functional component</p>
        <img src={Smiley} width={40} height={40} alt=""/>
    </div>
  )
}

export default Smile