import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
export default function Header() {
  return (
    <header>
      <nav >
        <ul className='nav'>
          <li><Link to={'/'} className='link'><AiFillHome /></Link></li>
          <li><Link to={'/Infos'} className='link'><FaListUl /></Link></li>
        
         

        </ul>
      </nav>
    </header>
  )
}
