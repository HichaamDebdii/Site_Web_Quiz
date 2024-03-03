import React from 'react'
import Header from './Header'
import './infos.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
export default function Infos() {
  return (
    <div>
      <Header />
        <div className='container'>
          <div className="choix">
            <button className='button'><Link to={'/quiz'} className='link_ch'>TEST REACT <FaArrowRight /> </Link></button><br />
            <button className='button'><Link to={'/Mongo'} className='link_ch'>TEST MONGO DB <FaArrowRight /></Link></button><br />
            <button className='button'><Link to={'/mysql'} className='link_ch'>TEST MYSQL <FaArrowRight /></Link></button><br />
            <button className='button'><Link to={'/Uml'} className='link_ch'>TEST UML <FaArrowRight /> </Link></button><br />
            <button className='button'><Link to={'/Approche'} className='link_ch'>TEST APPROCHE AGILE <FaArrowRight /></Link></button><br />
            <button className='button'><Link to={'/Python'} className='link_ch'>TEST PYTHON <FaArrowRight /></Link></button>
          </div>
      </div>
    </div>
  )
}
