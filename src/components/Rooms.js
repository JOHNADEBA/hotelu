import {useState} from 'react'
import { Link } from 'react-router-dom'

import data from '../data'


function Rooms() {

  // const [rooms, setRooms] = useState(data)


  return <>    

      <h1 className='tc '>Explore All Rooms With Great Features/Amenities</h1>
      
      <div className='all-rooms'>
        {data.map(room =>{
          const { id } = room.sys
          const { name, price, images, slug  } = room.fields          
          let imgs = images.map((img, i)=> img.fields.file.url)

          return <div className ='one-room grow shadow-5 relative ' key={id} style = {{backgroundImage: `url(${imgs[0]}) `}}>
            {/* {imgs.map((img, i) => {
              return <img key={i} className ='w-25' src={img[0]} alt=""/>
            } )} */}
            {/* <img  className ='room-img' src={imgs[0]} alt=""/> */}
            <Link to = {`/rooms/${slug}`} className='room-btn'>Details</Link>

            <div className ='room-words flex justify-around w-100 pv2 b absolute bottom-0 '>
              <p>{name}</p>
              <p>${price}</p>            
            </div>

          </div>
        })}
      
    </div>
 </> 
}

export default Rooms 
