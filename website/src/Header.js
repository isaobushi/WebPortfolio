import React from 'react'
import { Link } from "react-router-dom";
import './Header.scss'




export default function Header(){
  return (
    <div className='wrapper-list'>
      <ul className='list'>
        <Link to="/">Home</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Portfolio">Porfolio</Link>
        <Link to="/About">About</Link>
      </ul>
    </div>
  )
}