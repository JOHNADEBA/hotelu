import {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import SideMenu from './SideMenu'
 
const Nav = ()=> {
    const [showMenu, setShowMenu] = useState(false);

    return ( <>
        <div className='navbar'>
            <div className="logo">
                <Link to ='/' className='log'>HOTELU</Link>
                <button className='bar' onClick={()=>setShowMenu(!showMenu)}>{showMenu ? <FaTimes/> : <FaBars/> } </button>
                                
            </div>
            
            <ul className ='menu'>
                <li >
                    <Link className='link' to = '/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to = '/rooms'>Rooms</Link>
                </li>                
            </ul>

            <div className="contact">
                <p>adebajohn@gmail.com</p>
                <p>01234567</p>
            </div>

            <div>
                <button className='nav-btn'>Log In</button>
            </div>
        </div>
        { showMenu && <SideMenu  setShowMenu = {setShowMenu}/> }
        </>
        
    )
}
 
 export default Nav
 
