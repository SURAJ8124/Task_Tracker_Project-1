import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='header'>
     <h1 >{title}</h1>
     <Button name="Add" color="green"/>
    </header>
  )
}

export default Header