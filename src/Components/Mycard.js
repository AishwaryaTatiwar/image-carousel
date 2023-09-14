import React from 'react'
import './Mycard.css';
const Mycard = (props) => {
  return (
    <div>
      <div className='myCard'>My card.no {props.cardno}</div>
    </div>
  )
}

export default Mycard
