
import { Link, useParams } from 'react-router-dom'

import data from '../data'
import Error from './Error'

function RoomDetails({match}) {
    
    let { slug } = useParams();
    
    const getRoomDetails = (slugs)=>{
        
        const oneRoom = data.find(room => room.fields.slug === slugs)
        return oneRoom         

    }
    // console.log(getRoomDetails())
     const rom = getRoomDetails(slug)
     console.log(!rom? 'notin' : rom)

     if(!rom) return <Error />
         
    const { name, description, capacity, price, extras, size, pets, breakfast, images} = rom.fields
    let imgs = images.map((img, i)=> img.fields.file.url)

    
            
    return (
        <section className='pa2'>
            <div className='flex justify-around pv3 items-center'>
                <h3>{name} room</h3>
                <p>${price}</p>                
            </div>
            <div className = 'flex items-center flex-wrap '>
                {imgs.map((img, i)=>{
                return <img key={i} className ='real-img center ma2' src={img} alt=""/>
                })}
            </div>
            
            
            <p className = 'pa3 pb0'>{description}</p> 
            <div className = ' sub-img pt4'>
                <div className = 'pt0 ml0'>                       
                    <p className = 'pt3'><strong className = 'blue '>Breakfast: </strong> {breakfast? 'Available' : 'Not Available'}</p>
                    <p className = 'pv3'><strong className = 'green'>Pets: </strong> {pets? 'Allowed' : 'Not Allowed'}</p>
                    <p><strong className = 'red'>Capacity: </strong> {capacity > 1 ? `${capacity} people` : `${capacity} person `} </p>
                    <p className = 'pv3'><strong className = 'purple'>Size: </strong> {size}&#13217;</p>
                </div>
                <ul className = ''>
                    <h2>Extras: </h2>
                    {extras.map((extra, i) =>{
                    return  <li className = 'f6 pv1' key={i}>{extra}</li>
                    })}
                </ul>
            </div>
        </section>
    )
       

    
}

export default RoomDetails
