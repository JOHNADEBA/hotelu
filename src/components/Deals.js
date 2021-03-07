import {useState} from 'react'
import { Link } from 'react-router-dom'

import data from '../data'

function Deals() {

    const feat = data.filter(deal => deal.fields.featured === true)
    const [deal, setDeal] = useState(feat)
    
    return <>        
            <h1 className='tc'>Deals Of The Day </h1>
            <div className='deal-rooms'>    
                {deal.map(deal =>{
                    const { id } = deal.sys
                    const { name, price, images, slug  } = deal.fields        
                    let imgs = images.map((img, i)=> img.fields.file.url)

                    return <div className ='one-room grow shadow-5 relative ' key={id} style = {{backgroundImage: `url(${imgs[0]}) `}}>
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

export default Deals
