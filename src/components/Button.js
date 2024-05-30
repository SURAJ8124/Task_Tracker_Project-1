import React from 'react'

const Button = ({ name,color}) => {
  return (
    <div>
         <button className='btn' style={{backgroundColor:color}}>{name}</button>
    </div>
  )
}

export default Button