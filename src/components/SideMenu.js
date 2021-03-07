import { Link } from 'react-router-dom'
import {FaTwitter, FaFacebook, FaHome, FaPhone} from 'react-icons/fa'
import {RiHotelBedFill, RiInstagramFill} from 'react-icons/ri'
import {MdEmail} from 'react-icons/md'


function SideMenu({setShowMenu}) {
    
    return (
        <div className='sidebar'>

            <ul className ='menud'>
                <li className ='flex items-center justify-center f4' >
                    <FaHome className='f3 yellow' />
                    <Link onClick={()=>setShowMenu(false)} className='link pl2 ' to = '/'> Home</Link>
                </li>
                <li className ='flex items-center justify-center f4'>
                    <RiHotelBedFill  className='f3 pink' />
                    <Link onClick={()=>setShowMenu(false)} className='link pl2' to = '/rooms'>Rooms</Link>
                </li>                
            </ul>

            <div className="tc ">
                <div className='flex  items-center justify-center '>
                    <MdEmail className='f3 purple'/>
                    <p className='white pl3'>adebajohn@gmail.com</p>
                </div>  
                <div className='flex  items-center justify-center '>
                    <FaPhone className='f5 green'/>
                    <p className='white pl3'>01234567</p>
                </div>  
                
            </div>

            <ul className='flex justify-around w-75 center mt5 pt5 f3 '>
                <li  >
                    <a onClick={()=>setShowMenu(false)} className='blue pointer dim' target="_blank" href = 'https://www.facebook.com/'><FaFacebook /></a>
                </li>
                <li  >
                    <a onClick={()=>setShowMenu(false)} className='red pointer dim'  target="_blank" href = 'https://www.facebook.com/'><RiInstagramFill /></a>
                </li>
                <li >
                    <a onClick={()=>setShowMenu(false)} className='blue pointer dim' target="_blank" href = 'https://www.facebook.com/'><FaTwitter /></a>
                
                </li>
            </ul>
            
        </div>
    )
}

export default SideMenu
