import React from 'react'
import Logo from '../images/WordPress_blue_logo.svg.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>

            <div className='logo'><img src={Logo}/></div>
            <div className='links'>
                <Link className="link"to="/?cat=art"><h6>ART</h6></Link>
                <Link className="link"to="/?cat=music"><h6>MUSIC</h6></Link>
                <Link className="link"to="?cat=poker"><h6>POKER</h6></Link>
                <Link className="link"to="?cat=football"><h6>FOOTBALL</h6></Link>

                <span>Raghav</span>
                <span>Logout</span>
                <span className='write'>
                    <Link className="link" to="/write">Write</Link>
                </span>

            </div>

        </div>
    </div>
  )
}

export default Navbar