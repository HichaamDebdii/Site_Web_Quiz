import React, { useState } from 'react';
import './Authentification.css';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink, Route } from 'react-router-dom/dist';
import video5 from '../components/video5.mp4'
import { FaTwitter } from "react-icons/fa";
import Header from './Header';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Authentification() {

  const handleLogin = (event) => {
    event.preventDefault();

  };


  return (
    <div className='container'> 
     <div className='video-container'>
        <video src={video5} autoPlay loop muted playsInline  className='background-video'/>
      </div>
   <Header/>
    <div className="auth-container">
        <p className='para'>
          Explorez l'univers captivant de la connaissance avec notre application web de quiz en different language de programmation. Conçue pour stimuler l'esprit et encourager l'apprentissage interactif, cette plateforme propose une expérience unique où l'éducation rencontre le divertissement.
        </p>
        <Link to="/infos" className='btn_auth' style={{  textDecoration: 'none' }}>
          Commencer
        </Link>
        <div className='icons'>
          <ul>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
          </ul>
        </div>

    </div> 
    </div>
)
  }
