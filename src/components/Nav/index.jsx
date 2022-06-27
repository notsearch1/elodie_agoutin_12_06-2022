import React from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    return (
        <Fragment>
            <nav className='nav'>
                <Link to="/" className='home-link'>
                    <img src={process.env.PUBLIC_URL + "logo.png"} alt="Logo SportSee" className='logo nav-link' />
                </Link>
                <Link to="/" className='nav-link'>Accueil</Link>
                <Link to="/profil" className='nav-link'>Profil</Link>
                <Link to="/règlage" className='nav-link'>Règlage</Link>
                <Link to="/communauté" className='nav-link'>Communauté</Link>
            </nav>


        </Fragment>
    )
}
