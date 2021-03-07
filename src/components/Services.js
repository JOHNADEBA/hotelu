import {GiMeal, GiWorld} from 'react-icons/gi'
import {FaCar, FaCocktail} from 'react-icons/fa'
function Services() {

    const service = [
        {
            id: 1,
            icon: <GiMeal />,
            meals:'GREAT MEALS',
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, tempora. '
        },
        {
            id: 2,
            icon: <FaCocktail />,
            meals:'DRINKS',
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, tempora. '
        },
        {
            id: 3,
            icon:<GiWorld />,
            meals:'TOURS',
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, tempora. '
        },
        {
            id: 4,
            icon:<FaCar />,
            meals:'FREE PICKUP/DROPOFF',
            info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, tempora. '
        },
    ]
    return (
        <div className = ' ' >
            <h1 className='tc'>Our Services </h1>
            <div  className='array-services '>
                {service.map(itm =>{
                const {id, icon, meals, info} = itm
                return <div key={id} className='services-details' >
                    <h1 className='blue mb1'>{icon}</h1>
                    <h3 className='pb2'>{meals}</h3>
                    <p>{info}</p>
                </div>
            })}

            </div>
            
        </div>
    )
}

export default Services
